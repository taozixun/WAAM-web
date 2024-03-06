import React,{useEffect,useState} from 'react';
import './ContactUs.css';
import { Table } from 'antd';
import {CloudDownloadOutlined} from '@ant-design/icons';
import JPG04 from '../img/04.jpg';
import JPG05 from '../img/05.jpg';
import { useNavigate } from 'react-router-dom';
import MapComponent from "../map/MapContainer";
const columns = [
  {
    title: '时间',
    dataIndex: 'time',
    key: 'time',
    render:(item)=>item||'-',
  },
  {
    title: '活动',
    dataIndex: 'active',
    key: 'active',
    render:(item)=>item||'-',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render:(item)=>item||'-',
  },
  {
    title: '院校',
    dataIndex: 'add',
    key: 'add',
    render:(item)=>item||'-',
  },
  {
    title: '时长',
    dataIndex: 'during',
    key: 'during',
    render:(item)=>item||'-',
  }
];

const data= [
  {
    time:'8月9日 10:00',
    active:'开始报到',
    key: '0',
    
  },
  {
    time:'8月10日 8:30',
    active:'开幕式 大会主席致辞',
    key: '1',
    name: '梁艳春',
    add:'珠海科技学院',
    during:'3分钟',
  },
  {
    active:'',
    key: '2',
    name: '裴志利',
    add:'内蒙古民族大学',
    during:'3分钟',
  },
  // {
  //   time:'8月10日 8: 40',
  //   active:'参会者合影',
  //   key: '3',
  //   during:'10分钟',
  // },
  {
    time:'8月10日 8:40~10:00',
    active:'大会特邀报告A——主持',
    key: '4',
    name: '王建新',
    add:'中南大学',
    // during:'80分钟',
  },
  {
    active:'报告 ',
    key: '5',
    name: '胡斌',
    add:'北京理工大学',
    during:'20分钟',
  },
  {
    active:'报告 ',
    key: '6',
    name: '李霞',
    add:'哈尔滨医科大学',
    during:'20分钟',
  },
  {
    active:'报告 ',
    key: '7',
    name: '李国君',
    add:'山东大学',
    during:'20分钟',
  },
  {
    active:'报告 ',
    key: '8',
    name: '高琳',
    add:'西安电子科技大学',
    during:'20分钟',
  },
  {
    active:'报告 ',
    key: '8.1',
    name: '郭茂祖',
    add:'北京建筑大学',
    during:'20分钟',
  },
  {
    time:'8月10日 10:20~10:40',
    active:'茶歇',
    key: '9',
    during:'20分钟',
  },
  {
    time:'10:40~12:00',
    active:'大会特邀报告B——主持',
    key: '10',
    name: '张法',
    add:'北京理工大学',
  },
  {
    active:'报告 ',
    key: '11',
    name: ' 李敏',
    add:'中南大学',
    during:'20分钟',
  },
  {
    active:'报告 ',
    key: '12',
    name: '赵兴明',
    add:'复旦大学',
    during:'20分钟',
  },
  {
    active:'报告 ',
    key: '13',
    name: '汪国华',
    add:'东北林业大学',
    during:'20分钟',
  },
  {
    active:'报告',
    key: '14',
    name: '郑春厚',
    add:'安徽大学',
    during:'20分钟',
  },
  {
    time:'8月10日 12:00~13:30',
    active:'午餐',
    key: '15',
    during:'90分钟',
  },
  {
    time:'8月10日 13:30~14:40',
    active:'青年学者发展前沿论坛I-主持',
    key: '16',
    name: '蒋庆华',
    add:'哈尔滨工业大学',
    during:'70分钟',
  },
  {
    time:'8月10日 14:40~15:00',
    active:'茶歇',
    key: '21',
    during:'20分钟',

  },
  {
    time:'8月10日 15:00~16:20',
    active:'擂台报告A-主持',
    key: '17',
    name: '王朝勇',
    add:'长春工程学院',
  },
  {
    active:'报告',
    key: '18',
    name: '杨晓伟',
    add:'华南理工大学',
    during:'20分钟',
  },
  {
    active:'报告',
    key: '19',
    name: '徐旭',
    add:'吉林大学',
    during:'20分钟',
  },
  {
    active:'报告',
    key: '20',
    name: '葛宏伟',
    add:'大连理工大学',
    during:'20分钟',
  },
  
  {
    active:'报告',
    key: '21',
    name: '韩霄松',
    add:'吉林大学',
    during:'20分钟',
  },
  {
    time:'8月10日 16:30',
    active:'晚宴',
    key: '21',
  },
  {
    time:'8月11日 8:30~10:30',
    active:'擂台报告 B-主持',
    name:'王丽敏',
    key: '22',
    during:'120分钟'
  },
  {
    active:'报告',
    name:'李向涛',
    add:'吉林大学',
    key: '23',
    during:'20分钟'
  },
  {
    active:'报告',
    name:'孙  亮',
    add:'大连理工大学',
    key: '24',
    during:'20分钟'
  },
  {
    active:'报告',
    name:'韩旭明',
    add:'暨南大学',
    key: '24.1',
    during:'20分钟'
  },
  {
    active:'报告',
    name:'姜  宇',
    add:'吉林大学',
    key: '25',
    during:'20分钟'
  },
  {
    active:'报告',
    name:'姜明洋',
    add:'内蒙古民族大学',
    key: '27',
    during:'20分钟'
  },
  {
    active:'报告',
    name:'李大琳',
    add:'珠海科技学院',
    key: '26',
    during:'20分钟'
  },
  {
    time:'8月11日 10:30~10:50',
    active:'茶歇',
    key: '27',
    during:'20分钟',
  },
  {
    time:'8月11日 10:50~11:00',
    active:'颁发荣誉讲者证书&&闭幕式',
    name:'梁艳春讲话',
    key: '28',
    during:'10分钟',
  },
  // {
  //   time:'8月11日 10:40~10:50',
  //   active:'闭幕式 ',
  //   name:'梁艳春讲话',
  //   key: '29',
  //   during:'10分钟',
  // },
];
const ContactUs = ({ navigateTo }) => {
    const navigate = useNavigate();
    useEffect(()=>{
        if(navigateTo!=='/contact'){
            navigate(navigateTo)
        }
    },[navigateTo])
    return (
        <div>
            <div className='body'>
                <div className='CUtitle' style={{background:`url(${JPG04})`,backgroundSize:'100% 100%'}}>
                  <div>会议安排</div>
                </div>
                <div className='CUbox'>
                  <div className='CUbody'>
                    <div className='strongItem'>
                      会议名称：
                    </div>
                    <div>
                    中文：机器学习进展及应用研讨会
                    </div>
                    <div>
                    英文：Workshop on Advances and Applications in Machine Learning
                    </div>
                    <div className='strongItem'>
                      会议主办 协办单位：
                    </div>
                    <div>
                    承办单位：内蒙古民族大学
                    </div>
                    <div>
                    协办单位：吉林大学、珠海科技学院、CCF 生物信息学专业委员会
                    </div>
                    <div className='strongItem'>
                    会议地点：
                    </div>
                    <div>
                    中国 通辽
                    </div>
                    <div className='strongItem'>
                    大会组委会成员:
                    </div>
                    <div>
                    梁艳春  吉林大学 珠海科技学院
                    </div>
                    <div>
                    裴志利  内蒙古民族大学
                    </div>
                    <div>
                    姜静清  内蒙古民族大学
                    </div>
                    <div>
                    张智丰  内蒙古民族大学
                    </div>
                    <div>
                    葛宏伟  大连理工大学
                    </div>
                    <div>
                    管仁初  吉林大学
                    </div>
                    <div>
                    杨晓伟  华南理工大学
                    </div>
                    <div>
                    韩霄松  吉林大学
                    </div>
                    <div>
                    丰小月  吉林大学
                    </div>
                    <div>
                    姜明洋  内蒙古民族大学
                    </div>
                    <img src={JPG05} alt="05" style={{width:'100%',marginTop:'15px'}}/>
                  </div>
                  <div className='CUbody-right'>
                    <Table columns={columns} dataSource={data} pagination={false}/>
                  </div>
                </div>
              <div className='mapContain2'>
                  <MapComponent/>
              </div>
            </div>
        </div>
    );
}

export default ContactUs;
