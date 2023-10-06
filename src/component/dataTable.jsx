import { useState } from "react";

// export default function DataTable({ data, headers, selectable = false, itemKey, updateSelection }) {
//   if (!headers || !headers.length) {
//     throw new Error('<DataTable /> headers is required.')
//   }
//   // value 순서에 맞게 테이블 데이터를 출력하기 위한 배열
//   const headerKey = headers.map((header) => header.value);
//   // itemKey가 없다면 headers의 첫번째 요소를 선택 
//   if (!itemKey) {
//     itemKey = headerKey[0];
//   }
//   // 선택한 row의 itemKey를 담은 배열
//   const [selection, setSelection] = useState(new Set());
//   const onChangeSelect = (value) => {
//     // 기존의 selection으로 새로운 Set 생성
//     const newSelection = new Set(selection);
//     if (newSelection.has(value)) {
//       // value가 있으면 삭제 (checked가 false이기 때문)
//       newSelection.delete(value);
//     } else {
//       // value가 없으면 추가 (checked가 true이기 때문)
//       newSelection.add(value);
//     }
//     // 새로운 Set으로 state 변경
//     setSelection(newSelection);
//     updateSelection([...newSelection]);
//   };
  
//   const onChangeSelectAll = (e) => {
//     if (e.target.checked) {
//       // checked가 true인 경우 전체 선택
//       const allCheckedSelection = new Set(
//         // 활성화된 행의 배열을 순회하며 itemKey로 요소에 접근해 데이터를 저장
//         data.filter(({ disabled }) => !disabled ).map((item) => item[itemKey])
//       );
//       setSelection(allCheckedSelection);
//       updateSelection([...allCheckedSelection]);
//     } else {
//         // checked가 false인 경우 전체 선택 해제
//         setSelection(new Set());
//         updateSelection([]);
//       }
//   };
//   const getAbledItems = (items) => {
//     return items.filter(({ disabled }) => !disabled );
//   };
//   const isSelectedAll = () => {
//     return selection.size === getAbledItems(data).length;
//   };

//   return (
//     <table>
//       <thead>
//         <tr>
//           {
//             selectable && 
//             <th>
//               <input 
//                 type="checkbox"
//                 checked={isSelectedAll()}
//                 onChange={onChangeSelectAll}
//               />
//             </th>
//           }
//           {
//             headers.map((header) => 
//               <th key={header.text}>
//                 {header.text} {/* 컬럼명 바인딩 */}
//               </th> 
//             )
//           }
//         </tr>
//       </thead>
//       <tbody>
//         {
//           data.map((item, index) => (
//             <tr 
//               key={index} 
//               className={
//               `
//                 ${selection.has(item[itemKey]) ? 'select_row': ''} 
//                 ${item.disabled ? 'disabled_row' : ''}
//               `
//             }>
//               {/* headerKey를 순회하면서 key를 가져옴 */}
//               {
//                 selectable && 
//                   <td className="select_column">
//                     <input 
//                       type="checkbox"
//                       disabled={item.disabled}
//                       checked={selection.has(item[itemKey])}
//                       onChange={() => onChangeSelect(item[itemKey])}   
//                     />
//                   </td>
//               }
//               { 
//                 headerKey.map((key) => 
//                   <td key={key + index}>
//                     {item[key]} {/* key로 객체의 값을 출력 */}
//                   </td>
//                 )
//               }
//             </tr>
//           ))
//         }
//       </tbody>
//     </table>
//   )
// }

// export const data = [
//   {
//     ID: 1,
//     TblSchema: "id1,type1,name1",
//     KorSchema: "아이디1,타입1,이름1",
//     TypeSchema: "Long,varchar,varchar",
//     TblSchemaComment: "스퀀스, 데이터베이스 타입, 데이터베이스 이름1",
//   },
// ];



export default function DataTable(
  { 
    headers, 
    items = [], // items props 받기, default parameter 빈 배열로 설정
    selectable = false, // selectable props 받기
    itemKey, // itemKey props 받기
    updateSelection, // updateSelection props 받기
  }) {
  if (!headers || !headers.length) {
    throw new Error('<DataTable /> headers is required.')
  }
  // value 순서에 맞게 테이블 데이터를 출력하기 위한 배열
  const headerKey = headers.map((header) => header.value);
  // itemKey가 없다면 headers의 첫번째 요소를 선택 
  if (!itemKey) {
    itemKey = headerKey[0];
  }
  // 선택한 row의 itemKey를 담은 배열
  const [selection, setSelection] = useState(new Set());
  const onChangeSelect = (value) => {
    // 기존의 selection으로 새로운 Set 생성
    const newSelection = new Set(selection);
    if (newSelection.has(value)) {
      // value가 있으면 삭제 (checked가 false이기 때문)
      newSelection.delete(value);
    } else {
      // value가 없으면 추가 (checked가 true이기 때문)
      newSelection.add(value);
    }
    // 새로운 Set으로 state 변경
    setSelection(newSelection);
    updateSelection([...newSelection]);
  };
  
  const onChangeSelectAll = (e) => {
    if (e.target.checked) {
      // checked가 true인 경우 전체 선택
      const allCheckedSelection = new Set(
        // 활성화된 행의 배열을 순회하며 itemKey로 요소에 접근해 데이터를 저장
        getAbledItems(items).map((item) => item[itemKey])
      );
      setSelection(allCheckedSelection);
      updateSelection([...allCheckedSelection]);
    } else {
        // checked가 false인 경우 전체 선택 해제
        setSelection(new Set());
        updateSelection([]);
      }
  };
  const getAbledItems = (items) => {
    return items.filter(({ disabled }) => !disabled );
  };
  const isSelectedAll = () => {
    return selection.size === getAbledItems(items).length;
  };

  return (
    <table>
      <thead>
        <tr>
          {
            selectable && 
            <th>
              <input 
                type="checkbox"
                checked={isSelectedAll()}
                onChange={onChangeSelectAll}
              />
            </th>
          }
          {
            headers.map((header) => 
              <th key={header.text}>
                {header.text} {/* 컬럼명 바인딩 */}
              </th> 
            )
          }
        </tr>
      </thead>
      <tbody>
        {
          items.map((item, index) => (
            <tr 
              key={index} 
              className={
              `
                ${selection.has(item[itemKey]) ? 'select_row': ''} 
                ${item.disabled ? 'disabled_row' : ''}
              `
            }>
              {/* headerKey를 순회하면서 key를 가져옴 */}
              {
                selectable && 
                  <td className="select_column">
                    <input 
                      type="checkbox"
                      disabled={item.disabled}
                      checked={selection.has(item[itemKey])}
                      onChange={() => onChangeSelect(item[itemKey])}   
                    />
                  </td>
              }
              { 
                headerKey.map((key) => 
                  <td key={key + index}>
                    {item[key]} {/* key로 객체의 값을 출력 */}
                  </td>
                )
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}