import { useState } from "react"
import convertColor from "./ConvertColor";

const INITIAL_FORM_STATE = {
  color: '#ffffff',
  rgb: 'rgb(255, 255, 255)',
}

export default function ColorForm() {
  const [form, setForm] = useState(INITIAL_FORM_STATE);

  const onFieldChange = (e) => {
    // transform into rgb
    const rgb = convertColor(e.target.value);
    // set new value in input
    setForm(prev => ({...prev, color: e.target.value}));

    if (e.target.value.length === 7 && e.target.value.startsWith('#')) {
      setForm(prev => ({...prev, rgb: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`}));
      e.target.closest('.color-form').style.backgroundColor = e.target.value;
    } else if (e.target.value.length > 7) {
      setForm(prev => ({...prev, rgb: 'Error!'}));
      e.target.closest('.color-form').style.backgroundColor = 'red';
    }

  }  

  return (
    <form className='color-form'>
      <div className='color-form__field'>
          <input 
            className='color-form__input' 
            id='name'
            value={form.color}
            onChange={onFieldChange}
          />
      </div>
      <div className='color-form__rgb'>{form.rgb}</div>
    </form>
  )
}