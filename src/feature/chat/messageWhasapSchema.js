export function messageWhasapSchemaCartProduct(products) {
  let msg =
    "*Hola*, \n Estoy interesado   en cotizar los siguientes productos: ";

  products.forEach((product, index) => {
    msg += `
    *${index + 1}. ${product.nombre}* ${
      product.volumen ? ` · ${product.volumen}${product.unidad}` : ""
    }
     ${
       product.piezasPorPaquete
         ? `- *PZS / Paq:* ${product.piezasPorPaquete}`
         : ""
     }
     - *Cantidad:* ${product.quantity}
    `;
  });

  msg += "Quedo atento(a) a su respuesta. ¡Gracias!";

  return msg;
}
