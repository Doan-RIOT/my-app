import React from 'react';
import './Dangky.css'

class Dangky extends React.Component{
    render(){
        return(
            <div id="Dangky">
                <h1>Đăng ký nhận bài viết mới</h1>
                <p>Công nghệ đang thay đổi nhanh chóng hãy cùng vươn ra thế giới với những bài viết chất lượng từ fullstack Station!!!</p>
                <form >
                    <input value="Tên của bạn" type="text"></input><br></br>
                    <input Value="Email của bạn" type="text"></input><br></br>
                    
                </form>
                <input type="checkbox"></input><p>đông ý nhận tin</p>
                <button>Đăng ký</button>
                <p>Bạn sẽ nhận được email thông báo khi có bài viết mới, mình không spam vì mình cũng rất ghét :D</p>
            </div>
        );
    }
}

export default Dangky;