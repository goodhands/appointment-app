import clientPromise from "./mongodb";

export async function connect() {
  await clientPromise();
}
