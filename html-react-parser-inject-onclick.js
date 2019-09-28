//https://github.com/arunkumarshahi/html-react-parser-inject-onclick.git

import React, { Component } from 'react';

import parse from 'html-react-parser';
class App extends Component {
	updateLinkAction = (comp) => {
		comp.forEach((component, index) => {
			console.log(component);
			if (
				component.props &&
				component.type === 'a' &&
				component.props.title &&
				[ 'visit AK', 'Hello AK' ].includes(component.props.title)
			) {
				comp[index] = React.cloneElement(component, {
					onClick: () => {
						alert(component.props.href);
						window.location = 'http://localhost:3000/';
						sessionStorage.setItem('name', component.props.href);
					},
					href: 'http://localhost:3000/'
				});
			}
			component.props &&
				component.props.children &&
				Array.isArray(component.props.children) &&
				this.updateLinkAction(component.props.children);
		});
		console.log('near to exit point');
		return comp;
	};
	render() {
		const html = `
		<h2>The value Attribute</h2>
<p>The value attribute specifies the initial value for an input field:
<h1>hello
<a title ="visit AK" href="https://www.w3schools.com">Visit W3Schools.com!</a>
</h1>
</p>

<form action="">
<a title ="Hello AK" href="https://www.w3schools.com">Visit JP
<a title ="Hello AK" href="https://www.lp.com">Visit LP</a>
<a title ="Hello AK" href="https://www.sp.com">Visit SP</a>
</a>
First name:<br>
<input type="text" name="firstname" value="John">
<br>
Last name:<br>
<input type="text" name="lastname">
<a title ="Hello AK" href="https://www.dp.com">Visit DP</a>
</form>
		`;
		const html1 = `                          <div class="summary-news">
		<div class="news-header">
<a href="/news/ni62632647?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=b688335a-3266-4b15-ab7b-ab8edbc4b1c4&pf_rd_r=N3PTDB9ZRF6ZDAQJ5W0Z&pf_rd_s=center-6&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_nw_tp2"
class="headlines" >‘Joker’ Premiere Disinvites Interview Press From Saturday’s Hollywood Premiere</a>
<div class="infobar">
<ul class="ipl-inline-list">
<li class="ipl-inline-list__item">
<span>27 September 2019</span>
</li>
<li class="ipl-inline-list__item">
<span>Variety - Film News</span>
</li>
</ul>
</div>
		</div>
										<div class="news-header">
<a href="/news/ni62632244?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=b688335a-3266-4b15-ab7b-ab8edbc4b1c4&pf_rd_r=N3PTDB9ZRF6ZDAQJ5W0Z&pf_rd_s=center-6&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_nw_tp3"
class="headlines" >Marvel, Sony Pictures Reach Deal for Another ‘Spider-Man’ Film</a>
<div class="infobar">
<ul class="ipl-inline-list">
<li class="ipl-inline-list__item">
<span>27 September 2019</span>
</li>
<li class="ipl-inline-list__item">
<span>The Wrap</span>
</li>
</ul>
</div>
		</div>
		</div>`;
		const comp = parse(html1);
		const updatedComp = this.updateLinkAction(comp);
		console.log(updatedComp);
		return <div className="App">{updatedComp}</div>;
	}
}

export default App;

