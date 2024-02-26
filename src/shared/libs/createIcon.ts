import { FunctionComponent, ReactElement, SVGAttributes } from "react"

type Parameters = SVGAttributes<SVGElement>

type Props = {
  size?: string
  className?: string
}

type Source = (parameters: Parameters) => ReactElement

export const createIcon =
  (source: Source): FunctionComponent<Props> =>
  ({ className, size }) => {
    const parameters: Parameters = {
      fill: "currentColor",
      className,
      width: size ?? "100%",
      height: size,
    }

    return source(parameters)
  }
