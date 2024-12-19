import { Button, Form, message } from 'antd'
import React from 'react'
import { ButtonComponent } from '../../component/ButtonComponent/ButtonComponent'

export const SupportPage = () => {
    const handleSubmit = () => {
        message.success("Cảm ơn bạn đã phản hồi!")
    }
    return (
        <>
            {/* <header>
                <h1>Chăm Sóc Khách Hàng</h1>
            </header> */}

            <div >


                <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderBottom: '2px dashed #ccc' }}>
                    <h2>Liên Hệ Chúng Tôi</h2>
                    <p>Nếu bạn có bất kỳ câu hỏi hoặc yêu cầu nào, hãy liên hệ với chúng tôi:</p>
                    <p>Email: <a href="mailto:support@example.com">support@example.com</a></p>
                    <p>Số Điện Thoại: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
                </section>

                <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderBottom: '2px dashed #ccc' }}>
                    <h2>Trung Tâm Hỗ Trợ</h2>
                    <p>Chúng tôi cung cấp một trung tâm hỗ trợ trực tuyến để giúp bạn giải quyết mọi vấn đề:</p>
                    <p><a href="/support">Trung Tâm Hỗ Trợ</a></p>
                </section>
                <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderBottom: '2px dashed #ccc' }}>
                    <h2>Phản Hồi</h2>
                    <p>Chúng tôi rất đánh giá mọi ý kiến đóng góp của bạn. Hãy để lại phản hồi của bạn tại đây:</p>
                    <form >
                        <div style={{ display: 'flex' }}>
                            <label for="feedback">Phản Hồi:</label>
                            <textarea id="feedback" name="feedback" rows="4" cols="50"></textarea>
                        </div>
                        <br />
                        
                    </form>
                </section>
            </div>

        </>
    )
}
