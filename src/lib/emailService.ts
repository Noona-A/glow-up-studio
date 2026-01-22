import emailjs from '@emailjs/browser';
import { FitzpatrickResult, fitzpatrickQuestions } from './fitzpatrickScoring';

// EmailJS Configuration - User needs to replace these with their own credentials
const EMAILJS_SERVICE_ID = 'service_s2m1r8g';
const EMAILJS_TEMPLATE_ID = 'template_sfokh15';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export interface PatientDetails {
  fullName: string;
  dateOfBirth: string;
  email: string;
  mobile: string;
  address?: string;
  emergencyContactName?: string;
  emergencyContactPhone?: string;
}

export interface MedicalScreening {
  pregnantOrBreastfeeding: { answer: boolean; details?: string };
  diabetes: { answer: boolean; details?: string };
  epilepsy: { answer: boolean; details?: string };
  autoimmune: { answer: boolean; details?: string };
  photosensitivity: { answer: boolean; details?: string };
  keloidScarring: { answer: boolean; details?: string };
  skinConditions: { answer: boolean; details?: string };
  vitiligo: { answer: boolean; details?: string };
  herpesSimplex: { answer: boolean; details?: string };
  skinCancer: { answer: boolean; details?: string };
  hormonalConditions: { answer: boolean; details?: string };
  otherConditions?: string;
}

export interface LaserSafety {
  isotretinoin: { answer: boolean; datesStopped?: string };
  sunExposure: { answer: boolean; details?: string };
  fakeTan: { answer: boolean; details?: string };
  waxingEpilating: { answer: boolean; details?: string };
  recentTreatments: { answer: boolean; details?: string };
  brokenSkin: { answer: boolean; details?: string };
  tattoos: { answer: boolean; details?: string };
  pacemaker: { answer: boolean; details?: string };
  anticoagulants: { answer: boolean; details?: string };
  pigmentationChanges: { answer: boolean; details?: string };
}

export interface TreatmentDetails {
  patchTestAreas: string[];
  otherArea?: string;
  previousLaser: { answer: boolean; details?: string; adverseReactions?: string };
  recentHairRemoval: string[];
}

export interface ConsentData {
  accurateInfo: boolean;
  understandsPatchTest: boolean;
  followsAftercare: boolean;
  understandsPostponement: boolean;
}

export interface SignatureData {
  signatureImage: string;
  typedName: string;
  signedAt: string;
  consentConfirmed: boolean;
}

export interface FormSubmission {
  referenceId: string;
  submittedAt: string;
  patientDetails: PatientDetails;
  medicalScreening: MedicalScreening;
  medications: string;
  allergies: string;
  laserSafety: LaserSafety;
  treatmentDetails: TreatmentDetails;
  consent: ConsentData;
  signature: SignatureData;
  fitzpatrickScores: Record<string, number>;
  fitzpatrickResult: FitzpatrickResult;
  ethnicBackground?: string;
}

export function generateReferenceId(): string {
  const date = new Date();
  const dateStr = date.toISOString().slice(0, 10).replace(/-/g, '');
  const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `RSKN-PT-${dateStr}-${randomPart}`;
}

function formatMedicalQuestion(label: string, data: { answer: boolean; details?: string }): string {
  if (!data.answer) return `${label}: No`;
  return `${label}: Yes${data.details ? ` - ${data.details}` : ''}`;
}

function formatFitzpatrickAnswers(scores: Record<string, number>): string {
  return fitzpatrickQuestions.map(q => {
    const score = scores[q.id] ?? 0;
    const selectedOption = q.options.find(o => o.score === score);
    return `${q.question}\nAnswer: ${selectedOption?.label || 'Not answered'} (Score: ${score})`;
  }).join('\n\n');
}

export function generateEmailContent(submission: FormSubmission): string {
  const { patientDetails, medicalScreening, laserSafety, treatmentDetails, consent, signature, fitzpatrickResult } = submission;

  return `
═══════════════════════════════════════════════════════════════
                    ReSKN CLINIC PATCH TEST FORM
═══════════════════════════════════════════════════════════════

Reference ID: ${submission.referenceId}
Submission Date: ${submission.submittedAt}

───────────────────────────────────────────────────────────────
                        PATIENT DETAILS
───────────────────────────────────────────────────────────────

Full Name: ${patientDetails.fullName}
Date of Birth: ${patientDetails.dateOfBirth}
Email: ${patientDetails.email}
Mobile: ${patientDetails.mobile}
${patientDetails.address ? `Address: ${patientDetails.address}` : ''}
${patientDetails.emergencyContactName ? `Emergency Contact: ${patientDetails.emergencyContactName} (${patientDetails.emergencyContactPhone || 'No phone'})` : ''}

───────────────────────────────────────────────────────────────
                    MEDICAL QUESTIONNAIRE
───────────────────────────────────────────────────────────────

${formatMedicalQuestion('Pregnant or breastfeeding', medicalScreening.pregnantOrBreastfeeding)}
${formatMedicalQuestion('Diabetes', medicalScreening.diabetes)}
${formatMedicalQuestion('Epilepsy', medicalScreening.epilepsy)}
${formatMedicalQuestion('Autoimmune condition(s)', medicalScreening.autoimmune)}
${formatMedicalQuestion('Photosensitivity / light sensitivity', medicalScreening.photosensitivity)}
${formatMedicalQuestion('History of keloid scarring', medicalScreening.keloidScarring)}
${formatMedicalQuestion('Eczema / psoriasis / dermatitis in treatment area', medicalScreening.skinConditions)}
${formatMedicalQuestion('Vitiligo', medicalScreening.vitiligo)}
${formatMedicalQuestion('Herpes simplex (cold sores)', medicalScreening.herpesSimplex)}
${formatMedicalQuestion('History of skin cancer', medicalScreening.skinCancer)}
${formatMedicalQuestion('Hormonal conditions (e.g., PCOS)', medicalScreening.hormonalConditions)}
${medicalScreening.otherConditions ? `Other medical conditions: ${medicalScreening.otherConditions}` : ''}

Current medications: ${submission.medications || 'None'}
Known allergies: ${submission.allergies || 'None'}

───────────────────────────────────────────────────────────────
                LASER SAFETY / CONTRAINDICATIONS
───────────────────────────────────────────────────────────────

${formatMedicalQuestion('Isotretinoin (Roaccutane) in last 6-12 months', laserSafety.isotretinoin)}
${formatMedicalQuestion('Sun exposure or sunbeds in last 2-4 weeks', laserSafety.sunExposure)}
${formatMedicalQuestion('Fake tan currently or within last 2 weeks', laserSafety.fakeTan)}
${formatMedicalQuestion('Waxing/epilating/threading in treatment area in last 4 weeks', laserSafety.waxingEpilating)}
${formatMedicalQuestion('Recent chemical peels/microneedling/laser/IPL in last 4 weeks', laserSafety.recentTreatments)}
${formatMedicalQuestion('Broken skin, irritation, infection, or active cold sore', laserSafety.brokenSkin)}
${formatMedicalQuestion('Tattoos / permanent makeup in treatment area', laserSafety.tattoos)}
${formatMedicalQuestion('Pacemaker or implanted electronic device', laserSafety.pacemaker)}
${formatMedicalQuestion('Anticoagulants or bleeding disorder', laserSafety.anticoagulants)}
${formatMedicalQuestion('History of pigmentation changes after skin treatments', laserSafety.pigmentationChanges)}

───────────────────────────────────────────────────────────────
                      TREATMENT DETAILS
───────────────────────────────────────────────────────────────

Areas for patch test: ${treatmentDetails.patchTestAreas.join(', ')}${treatmentDetails.otherArea ? `, ${treatmentDetails.otherArea}` : ''}
Previous laser hair removal: ${treatmentDetails.previousLaser.answer ? `Yes - ${treatmentDetails.previousLaser.details || 'No details'}${treatmentDetails.previousLaser.adverseReactions ? ` | Adverse reactions: ${treatmentDetails.previousLaser.adverseReactions}` : ''}` : 'No'}
Recent hair removal methods: ${treatmentDetails.recentHairRemoval.join(', ') || 'None'}

───────────────────────────────────────────────────────────────
                          CONSENT
───────────────────────────────────────────────────────────────

✓ I confirm the information I have provided is accurate: ${consent.accurateInfo ? 'Yes' : 'No'}
✓ I understand a patch test is required for safety: ${consent.understandsPatchTest ? 'Yes' : 'No'}
✓ I agree to follow aftercare advice: ${consent.followsAftercare ? 'Yes' : 'No'}
✓ I understand treatment may be postponed if unsafe: ${consent.understandsPostponement ? 'Yes' : 'No'}

───────────────────────────────────────────────────────────────
                         SIGNATURE
───────────────────────────────────────────────────────────────

Signed by (typed name): ${signature.typedName}
Signed at: ${signature.signedAt}
Electronic signature confirmation: ${signature.consentConfirmed ? 'Confirmed' : 'Not confirmed'}

[Signature image attached]

───────────────────────────────────────────────────────────────
                  FITZPATRICK QUESTIONNAIRE
───────────────────────────────────────────────────────────────

${submission.ethnicBackground ? `Ethnic Background: ${submission.ethnicBackground}\n` : ''}
${formatFitzpatrickAnswers(submission.fitzpatrickScores)}

═══════════════════════════════════════════════════════════════
                      FITZPATRICK RESULT
═══════════════════════════════════════════════════════════════

Total Score: ${fitzpatrickResult.totalScore}
Skin Type: ${fitzpatrickResult.type}
Description: ${fitzpatrickResult.description}

═══════════════════════════════════════════════════════════════
`;
}

export async function sendFormEmail(submission: FormSubmission): Promise<{ success: boolean; error?: string }> {
  // Check if EmailJS is configured
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY || EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
    console.warn('EmailJS not configured. Please update the credentials in src/lib/emailService.ts');
    return { 
      success: false, 
      error: 'Email service not configured. Please contact the clinic.' 
    };
  }

  const emailContent = generateEmailContent(submission);

  try {
    // Initialize EmailJS
    emailjs.init(EMAILJS_PUBLIC_KEY);

    // Send to clinic
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      to_email: 'nori@resknclinic.co.uk',
      from_name: submission.patientDetails.fullName,
      reply_to: submission.patientDetails.email,
      subject: `ReSKN Patch Test Form – ${submission.patientDetails.fullName} – ${submission.referenceId}`,
      message: emailContent,
      signature_image: submission.signature.signatureImage,
      reference_id: submission.referenceId,
    });

    // Send copy to patient
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      to_email: submission.patientDetails.email,
      from_name: 'ReSKN Clinic',
      reply_to: 'nori@resknclinic.co.uk',
      subject: `Your ReSKN Patch Test Form – ${submission.referenceId}`,
      message: emailContent,
      signature_image: submission.signature.signatureImage,
      reference_id: submission.referenceId,
    });

    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to send email' 
    };
  }
}
