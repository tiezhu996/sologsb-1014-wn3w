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

export type StepDiffKind = 'same' | 'added' | 'removed' | 'moved' | 'modified';

export interface StepDiff {
  kind: StepDiffKind;
  stepId: string;
  before: ProofStep | null;
  after: ProofStep | null;
  beforeIndex: number;
  afterIndex: number;
  fields: string[];
}

export interface GoalDiff {
  changed: boolean;
  before: string;
  after: string;
}

export interface VersionDiff {
  steps: StepDiff[];
  goal: GoalDiff;
  counts: Record<Exclude<StepDiffKind, 'same'>, number>;
}
