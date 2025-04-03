import React from 'react'

export default function Menu({ score, onPlay, onReplay, onReverse }) {
	return (
		<div className="menu c-wrap">
			<ul className="c-inner">
				<li>score: {score}</li>
				<li>
					<div className="btn" onMouseDown={onPlay} onTouchStart={onPlay}>{onReplay ? "replay" : "play"}</div>
				</li>
				{ onReplay && 
					<li>
						<div className="btn" onMouseDown={onReverse} onTouchStart={onReverse}>reverse</div>
					</li>
				}
			</ul>
		</div>
	)
}