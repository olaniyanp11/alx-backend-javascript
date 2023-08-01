export default function createInt8TypedArray(length, position, value) {
  const buffer = new DataView(new ArrayBuffer(length));
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }
  const int8Array = new Int8Array(buffer);
  int8Array[position] = value;
  return buffer;
}
