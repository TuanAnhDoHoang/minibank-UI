import styles from './Footer.module.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Footer(){
    return (
        <div className={cx('Footer')}>
            <div className={cx('left-side')}>
                <p>ViệtBank</p>
                <p>@ 2024 ViệtBank</p>
                <p>Bảo mật & An toàn</p>
            </div>
            <div className={cx('right-side')}>
                <p>Điều khoản</p>
                <p>Liên hệ</p>
                <p>Chi nhánh</p>
            </div>
        </div>
    )
}
export default Footer;