import React from "react";

export const ProductTechDetails = ({ product }) => {
  const {
    category_id,
    chemie,
    nom_voltage,
    capacity,
    discharge_current,
    connector,
    width,
    length,
    height,
    current,
    max_current,
    balance_current,
    battery_type,
  } = product;
  console.log("props product", product);

  return (
    <div>
      <p className="font-medium text-xl my-4">Характеристики:</p>
      <ul className="flex flex-col gap-2 px-3">
        {chemie && <li>Хімія: {chemie}</li>}
        {nom_voltage && <li>Номінальна напруга, В: {nom_voltage}</li>}
        {capacity && <li>Ємність, А/г: {capacity}</li>}
        {discharge_current && <li>Струм розряду, А: {discharge_current}</li>}
        {connector && <li>Конектор: {connector}</li>}
        {width && length && height && (
          <li>
            Габарити, мм: {width} * {length} * {height}
          </li>
        )}
        {current && <li>Сила струму, А: {current}</li>}
        {max_current && <li>Максимальний струм, А: {max_current}</li>}
        {balance_current && <li>Струм балансування, А: {balance_current}</li>}
        {battery_type && <li>Тип батареї: {balance_current}</li>}
      </ul>
    </div>
  );
};
