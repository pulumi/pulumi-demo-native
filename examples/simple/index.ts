import * as demo from "@pulumi/demo-native";

const random = new demo.Random("my-random", { length: 24 });

export const output = random.result;
