interface Params {
  [key: string]: any;
}

export default function Hi(params: Params) {
  console.log(params);
}
