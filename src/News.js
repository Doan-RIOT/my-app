import React from 'react';
import './News.css';
import New from './New'

class News extends React.Component{
    render(){
      return(
        <div className="ad">
           <h1>Bài viết mới</h1>
           <New
           src="https://anhdephd.com/wp-content/uploads/2017/05/hinh-nen-yasuo-dep-nhat.jpg"
           name="Hãy sẵn sàng với serveress"
           dt= "th11.28.2018 | Công nghệ. Hệ điều hành. Máy chủ web. Môi trường phát triển"
           ></New>

          <New
          src="https://image1.infogame.vn/2019/04/09/avatar-yasuo.jpg"
           name="Chữ mờ quá đọc éo được"
           dt= "th11.28.2018 | Công nghệ. Hệ điều hành. Máy chủ web. Môi trường phát triển"
           ></New>

          <New
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXbwFpxdXT7hdimSKE86pqGVNR5gm8NNa9kWBg4AMP9TS5tPZc"
           name="Áp dụng chiêu thức vô học vào lập trình???"
           dt= "th4.10.2018 | Lập trình"
           ></New>

        </div>

        
      );
    }
  }
export default News;