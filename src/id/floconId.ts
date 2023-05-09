import { customAlphabet } from 'nanoid';
import { toUnixTimeString } from "../unixtime/unixTime";

export type NanoidFunction = (size?: number) => string;

const alphabetHexa = '1234567890ABCDEF';
const alphabetAlphaNum = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const nanoidHex = customAlphabet(alphabetHexa, 6);
const nanoidAlphanum = customAlphabet(alphabetAlphaNum, 6);

export type FloconRandomSequenceType = "16_CHARS_HEX" | "32_CHARS_HEX" | "16_CHARS_APHANUM" | "32_CHARS_ALPHANUM";

function getIdFunctionParams(randomSequenceType: FloconRandomSequenceType): [number, NanoidFunction] {
  switch (randomSequenceType) {
    case "32_CHARS_ALPHANUM":
      return [32, nanoidAlphanum];
    case "32_CHARS_HEX":
      return [32, nanoidHex];
    case "16_CHARS_APHANUM":
      return [16, nanoidAlphanum]
    case "16_CHARS_HEX":
    default:
      return [16, nanoidHex];
  }
}

const defaultHashFunction = (item) => "";

export function floconId(
  date: Date = new Date(),
  item: object | string = null,
  hashFunction: (item: object | string) => string = defaultHashFunction,
  randomSequenceType: FloconRandomSequenceType = "16_CHARS_HEX",
): string {
  const unixTime = toUnixTimeString(date);
  const shard = hashFunction(item);
  const [totalLength, idFunction] = getIdFunctionParams(randomSequenceType)
  const prefix = unixTime + shard;
  const length = totalLength - prefix.length;
  return prefix + idFunction(length);
}

export function floconIdHex16(): string {
  return floconId();
}

export function floconIdHex32(): string {
  return floconId(new Date(), null, defaultHashFunction, "32_CHARS_HEX");
}

export function floconIdAlphanum16(): string {
  return floconId(new Date(), null, defaultHashFunction, "16_CHARS_APHANUM");
}

export function floconIdAlphanum32(): string {
  return floconId(new Date(), null, defaultHashFunction, "32_CHARS_ALPHANUM");
}
