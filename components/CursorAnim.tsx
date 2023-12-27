"use client"
import "./cursor.css"
import React, { useEffect, useRef } from 'react'

export default function CustomCursor() {
	const cursorRef: any = useRef(null)
	useEffect(() => {
		if (cursorRef.current == null || cursorRef == null)
			return;
		document.addEventListener('mousemove', e => {
			if (cursorRef.current == null)
				return;
			cursorRef.current.setAttribute("style", "top: " + (e.clientY) + "px; left: " + (e.clientX) + "px;")
		})
		// document.addEventListener('click', () => {
		// 	if (cursorRef.current == null)
		// 		return;
		// 	cursorRef.current.classList.add("expand");
		// 	setTimeout(() => {
		// 		if (cursorRef.current == null)
		// 			return;
		// 		cursorRef.current.classList.remove("expand");
		// 	}, 500)
		// })
		document.addEventListener("mouseout", () => {
			if (cursorRef.current == null)
			return;
		cursorRef.current.setAttribute("style","display:none;");
		})
	}, [])
	return (
		<div className='cursor' ref={cursorRef}>
		</div>
	)
}
