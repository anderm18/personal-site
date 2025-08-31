// src/declarations.d.ts
declare module '*.svg' {
  const src: string;
  export default src;
}
declare module '*.jpeg' {
  const src: string;
  export default src;
}
declare module '*.jpg' {
  const src: string;
  export default src;
}
declare module '*.png' {
  const src: string;
  export default src;
}
declare module '*.json' {
  const value: any;
  export default value;
}
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}