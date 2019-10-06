import React from 'react';
import './News.css';
import New from './New'

class News extends React.Component{
    render(){
      return(
        <div className="ad">
           <h1>Bài viết mới</h1>
           <New
           src="https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/16097/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png"
           name="Hãy sẵn sàng với serveress"
           dt= "th11.28.2018 | Công nghệ. Hệ điều hành. Máy chủ web. Môi trường phát triển"
           ></New>

          <New
          src="https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/16097/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png"
           name=""
           dt= "th11.28.2018 | Công nghệ. Hệ điều hành. Máy chủ web. Môi trường phát triển"
           ></New>

          <New
           src="https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/16097/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png"
           name=""
           dt= "th4.10.2018 | Lập trình"
           ></New>

        </div>

        
      );
    }
  }
export default News;