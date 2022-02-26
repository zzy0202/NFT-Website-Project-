function swapper (selector,imgArray) {
	let leftButton = document.querySelector(selector+'>.leftButton');
	let rightButton = document.querySelector(selector+'>.rightButton');
	let getImgList = document.querySelector(selector+'>.imgList');
	let currentIndex = 0;
	let beforeIndex = null;
	let afterIndex = null;
	let circleList = document.querySelector('.circleList');
	for (let i = 0; i < imgArray.length; i++) {
		if(imgArray[i].isPic) {
			if(i!==0) {
				getImgList.innerHTML+=`<div class="imgItem" data-index="${i}">
																<img src="${imgArray[i].src}" alt="">
															</div>`
			}
			else {
				getImgList.innerHTML+=`<div class="imgItem active" data-index="${i}">
																<img src="${imgArray[i].src}" alt="">
															</div>`
			}
		}
		else {
			if(i!==0) {
				getImgList.innerHTML+=`<div class="imgItem" data-index="${i}">
																<video src="${imgArray[i].src}" alt="" loop="loop" autoplay="autoplay" muted>
															</div>`
			}
			else {
				getImgList.innerHTML+=`<div class="imgItem active" data-index="${i}">
																<video src="${imgArray[i].src}" alt="" loop="loop" autoplay="autoplay" muted>
															</div>`
			}
		}
	}
	let imgList = document.querySelectorAll(selector+'>.imgList .imgItem');

	for (let i = 0; i < imgList.length; i++) {
		let littleCircle = document.createElement('div');
		littleCircle.className = 'circle';
		circleList.appendChild(littleCircle);
	}
	circleList.children[0].classList.add('circleActive');

	leftButton.addEventListener('click',function () {
		beforeIndex = currentIndex;
		currentIndex--;
		if(currentIndex<0) {
			currentIndex = imgList.length - 1;
		}
		imgList.forEach(function (item,i) {
			if(i===beforeIndex) {
				imgList[i].className = 'imgItem leftBefore';
				circleList.children[i].classList.remove('circleActive');
			}
			else if(i===currentIndex) {
				imgList[i].className = 'imgItem leftActive';
				circleList.children[i].classList.add('circleActive');
			}
			else {
				imgList[i].className = 'imgItem';
			}
		})
	})
	rightButton.addEventListener('click',function () {
		afterIndex = currentIndex;
		currentIndex++;
		if(currentIndex>imgList.length-1) {
			currentIndex = 0;
		}
		imgList.forEach(function (item,i) {
			if(i===afterIndex) {
				imgList[i].className = 'imgItem rightAfter';
				circleList.children[i].classList.remove('circleActive');
			}
			else if(i===currentIndex) {
				imgList[i].className = 'imgItem rightActive';
				circleList.children[i].classList.add('circleActive');
			}
			else {
				imgList[i].className = 'imgItem';
			}
		})
	})
}


