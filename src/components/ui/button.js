export default function Button({ text = 'Button', type = 'button', className = '' }) {
  return `<button type="${type}" class="btn ${className}">${text}</button>`;
}
