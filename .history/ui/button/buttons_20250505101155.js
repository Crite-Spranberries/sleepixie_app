import styles from "@/ui/button/buttons_modules.css";

export default function Button({
    onClick,
    buttonTitle,
    size,
    type,
    icon,
    isDisabled = false,
}) {
    let buttonClasses = classNames(styles.button, {
        [styles.small]: size === "small",
        [styles.secondary]: type === "secondary",
        [styles.disabled]: isDisabled,
        "bg-blue-500": type === "primary",
        "bg-red-500": type === "cancel",
        "bg-green-500": type === "confirm",
    });

    // styles.button;

    // if (type === "primary") {
    //     classes += " bg-blue-400";
    // }

    // if (size === "small") {
    //     classes += " " + styles.small;
    // }

    // if (type === "secondary") {
    //     classes += " " + styles.secondary;
    // }

    // if (type === "confirm") {
    //     classes += " bg-green-500";
    // }

    // if (type === "cancel") {
    //     classes += " bg-red-500";
    // }

    // if (isDisabled) {
    //     classes += " " + styles.disabled;
    // }

    return (
        <input
            type="button"
            className={buttonClasses}
            value={buttonTitle}
            onClick={onClick}
            disabled={isDisabled}
            size={size}
        />
    );
}
