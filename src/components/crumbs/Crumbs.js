require('./Crumbs.less');
import { Icon  } from "antd-mobile";

/*  
    需要传入参数：
    const data = [{name:'任县组织部',id:1},{name:'大屯乡',id:2},{name:'十里亭村',id:3}];	
    onClick: 点击面包屑中导航触发回调，回调有一个参数为被点击的面包屑id。 
    使用demo:
    clickHandle(id){
        console.log(id);
    }
    render() {
        const data = [{name:'任县组织部',id:1},{name:'大屯乡',id:2},{name:'十里亭村',id:3}];
        return (
            <div>
                <Crumb data = {data} onClick = {this.clickHandle}/>
            </div>
        );
    }
*/ 

function CardTabbar (props){ //请展开传入的属性
    function clickHandle(e){
        props.onClick(e.target.id);
    }
    return (
        <div className='crumbs-content'>
            <div className='crumbs-content-child'>
            {
            props.data.map(function(item,key){
                        return ( 
                            <div style={{display:'inline-block'}}>
                                <span style={{display:'inline-block'}}  onClick={clickHandle} id={item.id} className={key == (props.data.length-1)?'textgray':'textblue'}>
                                    {item.name}
                                </span>
                                    {key == (props.data.length-1)?'':<Icon type="right" size='xs' />}
                                    {/*{key == (props.data.length-1)?'':<span style={{color:'#bbb'}}>></span>}*/}
                            
                                
                            </div>
                        )
                    })  
            }
            </div>
        </div>
    );
};

export default CardTabbar ;