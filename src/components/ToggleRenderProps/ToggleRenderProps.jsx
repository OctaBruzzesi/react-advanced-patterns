import useToggle from "../../hooks/useToggle";

const ToggleRenderProps = ({ children, initialToggleOn = false }) => {
  const [toggleOn, toggle] = useToggle(initialToggleOn)

  return children(toggleOn, toggle)
}

export default ToggleRenderProps