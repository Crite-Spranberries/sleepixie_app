import styles from '@/components/Button/PageButton.module.css';

('use client');

const Button = ({ label }) => {
  const button = document.createElement('button');
  button.className = styles.pageButton;

  const textSpan = document.createElement('span');
  textSpan.textContent = label;
  button.appendChild(textSpan);

  return button;
};

export default Button;
