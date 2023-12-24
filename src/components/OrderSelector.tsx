import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectOrder: (order: string) => void;
  selectedOrder: string;
}
const OrderSelector = ({ onSelectOrder, selectedOrder }: Props) => {
  const orders = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-added", label: "Date added" },
    { value: "-created", label: "Date Created" },
    { value: "-rating", label: "Average rating" },
    { value: "-metacritic", label: "Popularity" },
  ];
  const currentOrder = orders.find((order) => order.value === selectedOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {/* Order by: Relevance */}
        Order by: {currentOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {orders.map((order) => (
          <MenuItem
            onClick={() => onSelectOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
export default OrderSelector;
