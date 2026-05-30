import styles from './Register.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faShield } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
const Register = () => {
    const registerInfo = [
        {
            infoType: "Họ và tên",
            placeHolder: "Nguyễn Văn A"
        },
        {
            infoType: "Số điện thoại",
            placeHolder: "09xx xxx xxx"
        },
        {
            infoType: "Email",
            placeHolder: "example@vietbank.com.vn"
        },
        {
            infoType: "Mật khẩu",
            placeHolder: "*******"
        },
        {
            infoType: "Xác nhận mật khẩu",
            placeHolder: "*******"
        },
    ];
    return (
        <div className={cx("wrapper")}>
            <div className={cx("register")}>
                <div className={cx("introduction")}>
                    <div className={cx("introduction-title")}>
                        <p>ViệtBank</p>
                        <p>Kiến tạo tương lai tài chính vững chắc với giải pháp ngân hàng số hiện đại và bảo mật</p>
                    </div>

                    <div className={cx("introduction-msg")}>
                        <div className={cx("introduction-msg-1")}>
                            <div className={cx("msg-icon")}>
                                <FontAwesomeIcon icon={faShield} />
                            </div>
                            <div>
                                <p>Bảo mật đa lớp</p>
                                <p>An tâm tuyệt đối cho mọi giao dịch</p>
                            </div>
                        </div>
                        <div className={cx("introduction-msg-2")}>
                            <div className={cx("msg-icon")}>
                                <FontAwesomeIcon icon={faBolt} />
                            </div>
                            <div>
                                <p>Xử lý tức thì</p>
                                <p>Trải nghiệm tốc độ không giới hạn</p>
                            </div>
                        </div>
                    </div>

                    <div className={cx("introduction-footer")}>
                        @ 2024 ViệtBank Báo cáo tài chính tin cậy
                    </div>
                </div>
                <div className={cx("register-form")}>
                    <div className={cx("register-title")}>
                        <p>Tạo tài khoản mới</p>
                        <p>Vui lòng điền thông tin đăng ký dịch vụ ViệtBank Digital</p>
                    </div>

                    <div className={cx("register-main-form")}>
                        {registerInfo.map(ri => (
                            <div className={cx("register-infomation")}>
                                <p>{ri.infoType}</p>
                                <input
                                    type={ri.infoType === 'Mật khẩu' || ri.infoType === 'Xác nhận mật khẩu' ? "password" : "text"}
                                    placeholder={ri.placeHolder} />
                            </div>
                        ))}

                        <div className={cx("policy-accept")}>
                            <input type="checkbox" />
                            <p>Tôi đồng ý với điều khoản sử dụng và chính sách bảo mật của Việt Bank</p>
                        </div>
                        <div className={cx("register-btn")}>
                            <button>Tạo tài khoản</button>
                        </div>
                        <div className={cx("account-exist")}>
                            <p>Đã có tài khoản? Đăng nhập ngay</p>
                        </div>
                    </div>

                    <div className={cx("register-footer")}>
                        <p>? Hỗ trợ</p>
                        <p>Tiếng Việt</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register;