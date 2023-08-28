
// export function generateCartItemName(name: string, attributes: object) {
//   if (!attributes && Object.keys(attributes).length === 0) {
//     return name;
//   }

//   const attributesArr = Object.values(attributes);
//   return `${name} - ${attributesArr.join(", ")}`;
// }


export function generateCartItemName(name: string, attributes: string[]) {
  if (!attributes) {
    return name
  }
  return `${name} - ${attributes.join(", ")}`;
}

