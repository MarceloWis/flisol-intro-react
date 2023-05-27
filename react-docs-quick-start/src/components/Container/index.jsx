import './styles.css'

// export default function Container() {
//   return (
//     <div className="container">Container</div>
//   )
// }

// export default function Container(props) {
//   return (
//     <div className="container">
//       {props.content}
//     </div>
//   )
// }

// export default function Container(props) {
//   return (
//     <div className="container">
//       {props.content}
//     </div>
//   )
// }

export default function Container(props) {
  return (
    <div className="container">
      {props.children}

      <p>{props.content}</p>
    </div>
  )
}