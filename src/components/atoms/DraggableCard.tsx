import { Flex, Text } from "@chakra-ui/react";
import { useDraggable } from "@dnd-kit/core";
import { useEffect } from "react";
import { CSS } from "@dnd-kit/utilities"
interface DraggableCardProps {
    title: string;
    id: string;
    section: string;
}

export const DraggableCard : React.FC<DraggableCardProps> = ({
    title,
    id,
    section
}) => {

    const { isDragging, setNodeRef, listeners, attributes, transform } = useDraggable({
        id: id,
        data: {
            title: title,
            section: section,
            id: id
        }
    });

    useEffect(() => {
        console.log("Dragging status", isDragging);
    }, [isDragging]);

    return (
        <Flex
            backgroundColor="white"
            padding={3}
            margin={2}
            transform={CSS.Translate.toString(transform)}
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            borderRadius={8}
            border="2px solid gray.500"
            boxShadow={"0 0 10px 0 rgba(0,0,0,0.1)"}
        >
            <Text
                color={"gray.800"}
            >
                {title}
            </Text>
        </Flex>
    )
}