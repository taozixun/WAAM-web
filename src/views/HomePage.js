import React,{useEffect,useState} from 'react';
import './HomePage.css';
import { Alert,Button, Divider,Col, Row  } from 'antd';
import {CloudDownloadOutlined} from '@ant-design/icons';
import MapComponent from "../map/MapContainer";
import JPG01 from '../img/01.jpg';
import JPG02 from '../img/02.jpg';
import JPG03 from '../img/03.jpg';
import { useNavigate } from 'react-router-dom';
const HomePage = ({ navigateTo }) => {
    const navigate = useNavigate();
    useEffect(()=>{
        if(navigateTo!=='/'){
            navigate(navigateTo)
        }
    },[navigateTo])
    const [content,setContent]=useState(`<h3>尊敬的 先生/女士，您好：</h3><div style="font-size:18px;">第二届机器学习进展及应用研讨会<span style="color:red;">（WAAML）</span>将于2023年8月9日至11日在内蒙古自治区通辽市举行。本次会议由内蒙古民族大学主办，吉林大学，珠海科技学院，中国计算机学会生物信息学会协办。
    会议将为机器学习技术研究人员、开发者、相关企业和用户提供一个学术交流和研究开发论坛。拟加强与国际学者和其他相关学科领域学者的沟通与交流，分享机器学习技术的成果和经验，探讨机器学习技术所面临的挑战和研究热点。会议将邀请多位机器学习领域的顶级专家学者做大会特邀报告，邀请近期在高水平学术会议或期刊发表论文的作者进行以“高水平成果交流" 为主题的论坛分享。
    </div>`);
  //   const [tabContent,setTabContent]=useState(`<table style="border-collapse: collapse;width: 100%; font-size: 16px;">
  //   <thead>
  //     <tr>
  //       <th style="background-color: #f2f2f2;border: 1px solid black;">姓名</th>
  //       <th  style="background-color: #f2f2f2;border: 1px solid black;">年龄</th>
  //       <th  style="background-color: #f2f2f2;border: 1px solid black;">城市</th>
  //     </tr>
  //   </thead>
  //   <tbody>
  //     <tr>
  //       <td style="border: 1px solid black;padding: 8px;text-align: left;">John Doe</td>
  //       <td style="border: 1px solid black;padding: 8px;text-align: left;">25</td>
  //       <td style="border: 1px solid black;padding: 8px;text-align: left;">New York</td>
  //     </tr>
  //     <tr>
  //       <td style="border: 1px solid black;padding: 8px;text-align: left;">Jane Smith</td>
  //       <td style="border: 1px solid black;padding: 8px;text-align: left;">30</td>
  //       <td style="border: 1px solid black;padding: 8px;text-align: left;">London</td>
  //     </tr>
  //     <tr>
  //       <td style="border: 1px solid black;padding: 8px;text-align: left;">Mike Johnson</td>
  //       <td style="border: 1px solid black;padding: 8px;text-align: left;">35</td>
  //       <td style="border: 1px solid black;padding: 8px;text-align: left;">Paris</td>
  //     </tr>
  //     <tr>
  //       <td style="border: 1px solid black;padding: 8px;text-align: left;">Mike Johnson</td>
  //       <td style="border: 1px solid black;padding: 8px;text-align: left;">35</td>
  //       <td style="border: 1px solid black;padding: 8px;text-align: left;">Paris</td>
  //     </tr>
  //   </tbody>
  // </table>`);
  // const [newsArr,setNewsArr]=useState([{
  //   name:'测试会议相关数据————（第一条）',
  //   time:'2022-12-12',
  //   downloadName:'hhhhhh.pdf',
  //   url:'https://nccbb2023.cppdd.cn/upload/20230316/6cac95e83e7ca3ce42f86bda678fd379.pdf',
  // },{
  //   name:'测试会议相关数据————（第2条）',
  //   time:'2022-12-12',
  //   downloadName:'hhhhhh.pdf',
  //   url:'https://nccbb2023.cppdd.cn/upload/20230316/6cac95e83e7ca3ce42f86bda678fd379.pdf',
  // },{
  //   name:'测试会议相关数据————（第3条）',
  //   time:'2022-12-12',
  //   downloadName:'hhhhhh.pdf',
  //   url:'https://nccbb2023.cppdd.cn/upload/20230316/6cac95e83e7ca3ce42f86bda678fd379.pdf',
  // },{
  //   name:'测试会议相关数据————（第4条）',
  //   time:'2022-12-12',
  //   downloadName:'hhhhhh.pdf',
  //   url:'https://nccbb2023.cppdd.cn/upload/20230316/6cac95e83e7ca3ce42f86bda678fd379.pdf',
  // },{
  //   name:'测试会议相关数据————（第5条）',
  //   time:'2022-12-12',
  //   downloadName:'hhhhhh.pdf',
  //   url:'https://nccbb2023.cppdd.cn/upload/20230316/6cac95e83e7ca3ce42f86bda678fd379.pdf',
  // },{
  //   name:'测试会议相关数据————（第6条）',
  //   time:'2022-12-12',
  //   downloadName:'hhhhhh.pdf',
  //   url:'https://nccbb2023.cppdd.cn/upload/20230316/6cac95e83e7ca3ce42f86bda678fd379.pdf',
  // },{
  //   name:'测试会议相关数据————（第7条）',
  //   time:'2022-12-12',
  //   downloadName:'hhhhhh.pdf',
  //   url:'https://nccbb2023.cppdd.cn/upload/20230316/6cac95e83e7ca3ce42f86bda678fd379.pdf',
  // },{
  //   name:'测试会议相关数据————（第8条）',
  //   time:'2022-12-12',
  //   downloadName:'hhhhhh.pdf',
  //   url:'https://nccbb2023.cppdd.cn/upload/20230316/6cac95e83e7ca3ce42f86bda678fd379.pdf',
  // },{
  //   name:'测试会议相关数据————（第9条）',
  //   time:'2022-12-12',
  //   downloadName:'hhhhhh.pdf',
  //   url:'https://nccbb2023.cppdd.cn/upload/20230316/6cac95e83e7ca3ce42f86bda678fd379.pdf',
  // },{
  //   name:'测试会议相关数据————（第10条）',
  //   downloadName:'hhhhhh.pdf',
  //   time:'2022-12-12',
  //   url:'https://nccbb2023.cppdd.cn/upload/20230316/6cac95e83e7ca3ce42f86bda678fd379.pdf',
  // }]);
  const item={
      downloadName:'邀请函.pdf',
      url:'http://www.keaml.cn/waaml2023/pdf/invitation.pdf',
    }
  const [humanList,setHumanList]=useState(['姜静清  内蒙古民族大学','张智丰  内蒙古民族大学','葛宏伟  大连理工大学','管仁初  吉林大学'])
  const [humanList2,setHumanList2]=useState(['杨晓伟  华南理工大学','韩霄松  吉林大学'])
  const [humanList3,setHumanList3]=useState(['丰小月  吉林大学','姜明洋  内蒙古民族大学'])
  const handleDownload=(url,downloadName)=>{
    var downloadLink = document.createElement("a");
    downloadLink.href = url;  
    downloadLink.download =downloadName; 
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
  const handleEnroll=()=>{
    const url = 'https://squarlhan.mikecrm.com/4OdFVWF';
    window.location.href = url;
}
    return (
        <div>
            <div className='body'>
                <img src={JPG01} alt="01" style={{width:'100%'}}/>
                <div className='bodychild-2'>
                    <div className='bodychild-2-item'>
                        <h1>大会简介</h1>
                        {/* <Alert style={{position:'relative',zIndex:'1'}} message="content内容设置为html格式，具体样式可自行设置" type="info" showIcon /> */}
                        <div dangerouslySetInnerHTML={{ __html:content}}>
                        </div>
                        {/* <span className='enrool' onClick={handleEnroll}>报名<span className='cash'>(报名费1000￥)</span></span> */}
                        <Button className='bt-2' type="primary" onClick={handleEnroll}>报名</Button>
                        <div style={{display:'flex',marginTop:'18px',fontSize:'20px'}} onClick={()=>{
                            handleDownload(item.url,item.downloadName);
                        }}>
                            <CloudDownloadOutlined style={{color:'#c90a27'}}/>
                            <div className='downloadItem' style={{fontSize:'22px'}}>
                                下载邀请函！
                            </div>
                        </div>
                    </div>
                    <div className='bodychild-2-item'>
                        <div style={{padding:'20px'}}>
                            <img src={JPG02} alt="02" style={{width:'100%'}}/>
                        </div>
                    </div>
                </div>
                {/* <div className='bodychild-2-bt'>
                    <Button className='bt-2' type="primary">按钮1</Button>
                    <Button  className='bt-2' type="primary">按钮2</Button>
                    <Button  className='bt-2' type="primary">按钮3</Button>
                </div> */}
                {/* <div className='bodychild-3'>
                    <div className='bodychild-3-item'>
                        <h1>会议动态</h1>
                        <Alert style={{position:'relative',zIndex:'1'}} message="链接为数组，可自行设置数量" type="info" showIcon />
                        <div style={{overflow:'auto',height: '200px'}}>
                            {newsArr.map((item,index)=>(
                                <>
                                    <div style={{display:'flex',margin:'10px'}} onClick={()=>{
                                        handleDownload(item.url,item.downloadName);
                                    }}>
                                        <CloudDownloadOutlined style={{color:'#c90a27'}}/>
                                        <div key={index} className='downloadItem'>
                                            {item.name}
                                            <span style={{color:'#666',float:'right'}}>{item.time}</span>
                                        </div>
                                    </div>
                                    <Divider dashed style={{margin:'0 0 15px'}}/>
                                </>
                            ))}
                        </div>
                    </div>
                    <div className='bodychild-3-item'>
                        <h1>大会日程</h1>
                        <Alert style={{position:'relative',zIndex:'1'}} message="表格内容设置为html格式，具体样式可自行设置" type="info" showIcon />
                        <div dangerouslySetInnerHTML={{ __html:tabContent}}>
                        </div>
                    </div>
                </div> */}
                <div className='bodychild-3-2'>
                    <h1>具体事项</h1>
                    <div className='title'>组委会热忱地邀请您出席本次会议，现将相关具体事项通知如下：</div>
                    <div>
                      1.	会议费标准：专家会议注册费1000 元/人；学生会议注册费600元/人；交通、食宿费用自理。
                    </div>
                    <div>
                      2.	会务联络：姜明洋（内蒙古民族大学），电话：18747831099；郭享渠（珠海科技学院），电话：13726214787；
                    </div>
                    <div>
                    韩霄松（吉林大学），电话：13756698685；Email：waaml2023@163.com。
                    </div>
                    <div>
                    3.	会议注册网址：<a href='https://squarlhan.mikecrm.com/4OdFVWF'>https://squarlhan.mikecrm.com/4OdFVWF</a>。
                    </div>
                </div>
                <img src={JPG03} alt="01" style={{width:'100%'}}/>
                <div className='bodychild-4'>
                    <h1>组织架构</h1>
                    <div className='title'>大会主席</div>
                    <div className='tag'>排名顺序不分先后</div>
                    <Row gutter={16} justify='center' style={{margin:'0 20px 30px'}}>
                            <Col className="gutter-row" span={4}>
                                <div className='humanName'>梁艳春  吉林大学 珠海科技学院</div>
                            </Col>
                            <Col className="gutter-row" span={3}>
                                <div className='humanName'>裴志利  内蒙古民族大学</div>
                            </Col>
                    </Row>
                    <div className='title'>大会程序主席</div>
                    <div className='tag'>排名顺序不分先后</div>
                    <Row gutter={16} justify='center' style={{margin:'0 20px 30px'}}>
                        {
                            humanList.map((item,index)=>(
                            <Col className="gutter-row" key={index} span={4}>
                                <div className='humanName'>{item}</div>
                            </Col>
                        ))
                        }
                    </Row>
                    <div className='title'>大会组委会主席</div>
                    <div className='tag'>排名顺序不分先后</div>
                    <Row gutter={16} justify='center' style={{margin:'0 20px 30px'}}>
                        {
                            humanList2.map((item,index)=>(
                            <Col className="gutter-row" key={index} span={3}>
                                <div className='humanName'>{item}</div>
                            </Col>
                        ))
                        }
                    </Row>
                    <div className='title'>大会宣传主席</div>
                    <div className='tag'>排名顺序不分先后</div>
                    <Row gutter={16} justify='center' style={{margin:'0 20px 30px'}}>
                        {
                            humanList3.map((item,index)=>(
                            <Col className="gutter-row" key={index} span={3}>
                                <div className='humanName'>{item}</div>
                            </Col>
                        ))
                        }
                    </Row>
                </div>
                <div className='bodychild-4'>
                    <h1>会议地点</h1>
                    <div className='address'>会议地点：内蒙古自治区通辽市鑫达国际酒店</div>
                    <div className='address'>会议时间：2023年8月9日至11日</div>

                </div>
            </div>
            <div className='mapContain'>
                <MapComponent/>
            </div>
        </div>
    );
}

export default HomePage;
