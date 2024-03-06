import React, { Component } from 'react';
import AMapLoader from '@amap/amap-jsapi-loader';
import './MapContainer.css';


class MapComponent extends Component {
    constructor() {
      super();
      this.map = {};
    }
  
    // dom渲染成功后进行map对象的创建
    componentDidMount() {
      AMapLoader.load({
        key: '6689e0d2f5308edac2f2e593f2a8ed0c', // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [''], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
        .then(AMap => {
          this.map = new AMap.Map('container', {
            // 设置地图容器id
            viewMode: '3D', // 是否为3D地图模式
            zoom: 15, // 初始化地图级别
            center: [122.27,43.6186], // 初始化地图中心点位置
          });
          // 将创建的点标记添加到已有的地图实例：
          // 创建一个 Marker 实例：
        const marker = new AMap.Marker({
          position: new AMap.LngLat(122.27115, 43.626),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
          title: '通辽'
        });
          this.map.add(marker);
        })
        .catch(e => {
          console.log(e);
        });
    }
  
    render() {
      // 初始化创建地图容器,div标签作为地图容器，同时为该div指定id属性；
      return <div id="container" className="map" style={{ height: '800px' }}></div>;
    }
  }
  // 导出地图组建类
  // class MapComponent extends Component {
  //   render() {
  //   return(
  //     <div>
  //       sssssss
  //     </div>
  //   )
  //   }
  // }
  export default MapComponent;
  