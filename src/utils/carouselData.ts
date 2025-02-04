type TextAlign = 'left' | 'right' | 'center' | 'justify' | 'start' | 'end';
type LeftPos = '1px' | '40px';

// Define el tipo para los elementos del carrusel
type CarouselItem = {
  src: string;
  alt: string;
  subText: string;
  title: string;
  primaryP: string;
  buttonText: string;
  align: TextAlign; // Asegúrate de que sea del tipo correcto
  leftPos: LeftPos; // Asegúrate de que sea del tipo correcto
};


export const carouselData: CarouselItem[] = [
  {
    src: "/assets/banner-1.png",
    alt: "slide 1",
    subText: "Camina con estilo",
    title: "Descubre los ultimos trends en calzado",
    primaryP: "Desde sneakers clasicos hasta botas de moda.",
    buttonText: "Compra ahora →",
    align: "left", // Este valor debe coincidir con TextAlign
    leftPos: "1px" // Este valor debe coincidir con LeftPos
  },
  {
    src: "/assets/banner-2.png",
    alt: "slide 2",
    subText: "Eleva tú look",
    title: "Encuentra el par de zapatos perfecto",
    primaryP: "Explora una gran variedad de estilos, colores y materiales, Perfectos para cualquier ocasión",
    buttonText: "Compra ahora →",
    align: "left", // Este valor debe coincidir con TextAlign
    leftPos: "1px" // Este valor debe coincidir con LeftPos
  },
  {
    src: "/assets/banner-3.png",
    alt: "slide 3",
    subText: "Confort y estilo",
    title: "Descubre algo que te haga ver y sentir mejor",
    primaryP: "Nuestra colección incluye confort y calidad, 2 en 1 para que no tengas que decidirte por solo uno.",
    buttonText: "Compra ahora →",
    align: "left", // Este valor debe coincidir con TextAlign
    leftPos: "1px" // Este valor debe coincidir con LeftPos
  },
];

export const carouselUniqueData: CarouselItem[] = [{
  src: "/assets/wide-banner.webp",
  alt: "slide 1",
  subText: "Comodidad a la moda",
  title: "Calzado que luce genial y se siente mucho mejor",
  primaryP: "Nuestra colección presenta calzado cómodo y elegante diseñado para mantener tus pies felices durante todo el día.",
  buttonText: "Compra ahora →",
  align: "right", // Este valor debe coincidir con TextAlign
  leftPos: "40px" // Este valor debe coincidir con LeftPos
}];