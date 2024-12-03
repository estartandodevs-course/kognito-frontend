import { regexRestrictMap } from './writing.variables';

export type RegexRestrictProps = keyof typeof regexRestrictMap;
export type DontWriteProps = RegexRestrictProps | RegexRestrictProps[];
export type SetFormatProps = 'cpf' | 'grade';
export type CapitalizeWordProps = boolean | 'allWords';
