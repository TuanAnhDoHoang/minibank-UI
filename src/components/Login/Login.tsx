import { useState } from "react";
import styles from "./Login.module.scss"

import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Login() {
    //hook
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [flag, setFlag] = useState<boolean>(false);
    
    const handleClick = () => {
        //Gọi API tới backend để thực hiện đăng nhập
        if(username === "anhdoo" && password === "anhdoo"){
            alert("Sign in success");
            setFlag(true);
        }
        else{
            alert("Sign in fail");
            setFlag(false);
        }
    }
    return (
        <div className={cx("Login")}>
            <div className={cx("login-form")}>
                <div className={cx("title")}>
                    {
                        flag? <p>Chào mừng trở lại {username}</p> :<p>Chào mừng trở lại</p> 
                    }
                    <p>Vui lòng đăng nhập vào tài khoản của bạn</p>
                </div>

                <div className={cx("info-form")}>
                    <div className={cx("phone-number")}>
                        <p>Số điện thoại/Tên đăng nhập</p>
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            type="text"
                            placeholder="Nhập tên đăng nhập" />
                    </div>
                    <div className={cx("password")}>
                        <p>Mật khẩu</p>
                        <input 
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password" placeholder="Nhập mật khẩu" />
                    </div>
                </div>

                <div className={cx("forget-password")}>
                    <p>Quên mật khẩu</p>
                </div>

                <div className={cx("login-btn")} onClick={handleClick}>
                    <button>Đăng nhập</button>
                </div>

                <div className={cx("register-suggest")}>
                    <p>Bạn chưa có tài khoản? </p>
                    <p>Tạo mới</p>
                </div>
            </div>
            <div className={cx("security-info")}>
                <p>Bảo mật chuẩn PCI DSS</p>
                <p>Mã Hoá 256bit</p>
            </div>
        </div>
    )
}
export default Login;