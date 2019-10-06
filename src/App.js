import React from 'react';
import logo from './logo.svg';
import './App.css';
import { tsPropertySignature } from '@babel/types';
import Header from './Header';
import Content from './Content';
import Dangky from './Dangky';
import News from './News';
import New from './New';

class App extends React.Component{
  render() {
  return (
    <div>
      
      <div className="nt">
        <Header/>
        <Content 
        src="https://fullstackstation.com/wp-content/uploads/2016/02/huong-dan-hoc-react-js.jpg"
        name= "HƯỚNG DẪN HỌC REACT" 
        dt= "Posted by Nguyễn Nhân | Th2.23.2016| Javascripts"
        text= "Hướng dẫn học Reactjs sao cho hiệu quả! Nếu bạn mới làm quen với React( Hoặc phần front-end gì gì đó..."
        ></Content>

        <Content 
        src="https://fullstackstation.com/wp-content/uploads/2016/05/huong-dan-cau-truc-thu-muc-du-an-react.jpg"
        name= "HƯỚNG DẪN CẤU TRÚC THƯ MỤC VÀ CÁCH VIẾT COMPONENT CHUẨN TRONG REACT"
        dt= "Posted by Nguyễn Nhân | Th5.7.2016| Javascripts"
        text= "Sau một thời gian tìm hiểu và áp dụng rộng rải hiệu quả, hôm nay mình xin chi sẻ với các bạn cái gì gì đó... "
        ></Content>

        <Content 
        src="https://fullstackstation.com/wp-content/uploads/2016/07/huong-dan-cai-dat-webpack-de-viet-reactjs-bang-es6.jpg"
        name= "HƯỚNG DẪN CÀI ĐẶT WEBPACK ĐỂ VIẾT REACTJS/ES6" 
        dt= "Posted by Nguyễn Nhân | Th7.20.2016| Javascripts"
        text= "Trên trang chủ của Reactjs thì các mã ví dụ đề được viết bằng ES5, mặc dù viết bằng ES5 hay ES6... "
        ></Content>

        <Content 
        src="https://fullstackstation.com/wp-content/uploads/2016/09/redux.png"
        name= "HƯỚNG DẪN SỬ DỤNG REDUIX HIỆU QUẢ TRONG ỨNG DỤNG REACT" 
        dt= "Posted by Nguyễn Nhân | Th9.28.2016| Javascripts"
        text="Câu hỏi: Khi nào thì nên sử dụng Application Scate, khi nào thì nên sử dụng Local..."
        ></Content>
     
      </div>
      <div className='at' >
        <Dangky/>
        <div className="bot"><News/></div>
      </div>
    </div>

  );
}
}

export default App;
