export type StepType = 'premise' | 'derivation' | 'goal';
export type CheckSeverity = 'error' | 'warning' | 'info';

export interface ProofStep {
  id: string;
  type: StepType;
  statement: string;
  rule: string;
  references: string[];
  note: string;
  counterexample: string;
  alternative: string;
}

export interface ProofVersion {
  id: string;
  name: string;
  createdAt: string;
  steps: ProofStep[];
  goal: string;
}

export interface ProofDocument {
  id: string;
  title: string;
  author: string;
  goal: string;
  symbols: Record<string, string>;
  steps: ProofStep[];
  versions: ProofVersion[];
  updatedAt: string;
}

export interface ProofCheck {
  id: string;
  severity: CheckSeverity;
  title: string;
  detail: string;
  stepId?: string;
}

export type ProofDiffKind = 'same' | 'added' | 'removed' | 'moved' | 'changed';

export interface ProofDiff {
  kind: ProofDiffKind;
  label: string;
  before: string;
  after: string;
  detail?: string;
}

export interface VersionDiff {
  entries: ProofDiff[];
  goal: { before: string; after: string } | null;
  counts: Record<ProofDiffKind, number>;
}
