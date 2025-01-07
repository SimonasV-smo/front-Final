export function gautiApatineRaide() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

export function gautiDidziaRaide() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

export function gautiSkaiciu() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

export function gautiSimboli() {
  const simboliai = '!@#$%^&*(){}[]=<>/,.';
  return simboliai[Math.floor(Math.random() * simboliai.length)];
}
