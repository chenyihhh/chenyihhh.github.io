function $(id){
	return document.getElementById(id);
}
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj)[attr];
	}
}
function Go(obj,step,target,attr,endFn){//形参，移动距离，目标点，属性，回调函数
			clearInterval(obj.timer);
			obj.timer=setInterval(function(){
				var Distance=parseInt(getStyle(obj,attr))+step;
//				step 可能是负数或者正数
				if(Distance>target && step>0 || Distance<target && step<0){
					//与判断与或判断并行时的执行方式？
					Distance=target;
				}
//				判断即将移动的距离,精确控制目标点
				obj.style[attr]=Distance+'px';
				if(Distance==target){
					clearInterval(obj.timer);
					if(endFn){
						endFn();
					}
				}
			},10);
		}	

function dispear(obj,step,endFn){
	var n;
	step>0 ?n=0 :  n=1 
	obj.op=setInterval(function(){  
		n=n+step;
		obj.style.opacity=n;  //opacity透明度
		if(n<=0 || n>=1 ){
			clearInterval(obj.op);
			if(endFn){
				endFn();
			}
		}
	},80)
}
function DoubleFn(n){
	if(n<10){
		return '0'+n;
	}else{
		return n;
	}
}

//抖动
function shake(obj,attr,control,endFn){
		if(control){
			obj.s=false;
			var pos=parseInt(getStyle(obj,attr));
			var arr=[];
			for(var i=20;i>=0;i-=2){
				arr.push(i,-i);
			}
			var num=0;
			var s=true;
			obj.shake = setInterval(function(){
				obj.style[attr]=pos+arr[num]+'px';
				num++;
				if(num==arr.length){
					clearInterval(obj.shake);
					obj.s=true;
					if(endFn){
						endFn();
					}
				}
			},40)
		}
	}
//获取第一个子元素兼容
function getFirst(obj){
			if(obj.firstElementChild){
				return obj.firstElementChild;
			}else{
				return obj.firstChild;
			}
		}
//获取最后一个子元素兼容
function getLast(obj){
			if(obj.lastElementChild){
				return obj.lastElementChild;
			}else{
				return obj.lastChild;
			}
		}
//获取前一个兄弟节点兼容
function getPrevious(obj){
			if(obj.previousElementSibling){
				return obj.previousElementSibling;
			}else{
				return obj.previousSibling;
			}
		}
//获取下一个兄弟节点兼容
function getNext(obj){
			if(obj.nextElementSibling){
				return obj.nextElementSibling;
			}else{
				return obj.nextSibling;
			}
		}
//获取元素到文档边缘的距离
function getPos(obj){
			var pos={'top':0,'left':0}
			while(obj){
			pos.top+=obj.offsetTop;
			pos.left+=obj.offsetLeft;
			obj=obj.offsetParent;
		}
			return pos;
		}