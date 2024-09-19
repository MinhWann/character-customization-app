import classNames from "classnames"

function Section({ title, list, selectedValue, onSelect, className }) {

  return (
    <div>
      <h2>{title}</h2>
      <ul className="list">
        {list.map((item, index) => {
          return (
            <li key={index} className={classNames('square', {
              selected: selectedValue === item
            })}> 
              <img src={item} alt="" className={classNames("img-center", className)} onClick={() => onSelect(item)} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Section;

