import React from 'react'

export const BrandFilterSelector = (props) => {
    return (
        <div>
            <label>
                <input
                    type='checkbox'
                    checked={props.checked}
                    onChange={props.onChange}
                />{props.brand}
            </label>
        </div>
    )
}
