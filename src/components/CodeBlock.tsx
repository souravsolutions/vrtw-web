import { CodeBlock } from "@/components/ui/code-block";

const CodeBlocks = () => {
	return (
		<CodeBlock
			tabs={[
				{
					label: "pnpm",
					code: "pnpm create vrtw",
					language: "bash",
				},
				{
					label: "npm",
					code: "npm create vrtw",
					language: "npm",
				},
				{
					label: "Bun",
					code: "bun create vrtw",
					language: "bun",
				},
				{
					label: "Yarn",
					code: "yarn create vrtw",
					language: "yarn",
				},
			]}
		/>
	);
};

export default CodeBlocks;
