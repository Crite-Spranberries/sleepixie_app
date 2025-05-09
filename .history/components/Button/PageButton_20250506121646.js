import styles from '@/components/Button/PageButton.module.css';

const Button = ({ label }) => {
  const button = document.createElement('button');
  button.className = styles.pageButton;

  const textSpan = document.createElement('span');
  textSpan.textContent = label;
  button.appendChild(textSpan);

  const arrowIcon = createArrowIcon();
  button.appendChild(arrowIcon);

  return button;
};

export default Button;
