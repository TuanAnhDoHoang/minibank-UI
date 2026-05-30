import styles from "./Header.module.scss"
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function Header(){
    return (
        <div className={cx("Header")}>
            <p className={cx("VietBank")}>ViệtBank</p>
            <p className={cx("QuestionMark")}>?</p>
        </div>
    )
}
export default Header;