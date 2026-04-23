import Checkbox from "../../../UI/form/Checkbox";

export default function MaterialFilter({
  materials,
  selectedMaterials,
  onToggle,
}) {
  return (
    <div>
      <h3 className="font-semibold text-text-light dark:text-text-dark mb-4">
        Material
      </h3>
      <div className="space-y-3" role="group" aria-label="Filtro de materiales">
        {materials.map((material) => (
          <Checkbox
            key={material}
            label={material}
            checked={selectedMaterials.includes(material)}
            onChange={() => onToggle(material)}
          />
        ))}
      </div>
    </div>
  );
}
