import * as React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";
import {Category} from "../../types/Category"

/**
 * ProductCard の Props
 */
type ProductCardProps = {
    id: number;
    title: string;
    price: number;
    categories: Category[];
    description: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
    id,
    title,
    price,
    categories,
    description,

}) => {
    const navigate = useNavigate();
    /**
      * 商品クリック時（とりあえず詳細 or 編集画面へ）
      */
    const handleClick = () => {
        navigate("/products/" + id);
    };

    /**
      * カート追加
      */
    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation();
        console.log("カートに追加", id);
    };

    return (
        <Box
            onClick={handleClick}
            sx={{
                width: 280,
                backgroundColor: "background.paper",
                borderRadius: 2,
                boxShadow: 1,
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                    boxShadow: 6,
                    transform: "translateY(-4px)",
                },
            }}
        >
            {/* 画像エリア（仮） */}
            <Box
                sx={{
                    position: "relative",
                    height: 180,
                    backgroundColor: "grey.200",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography color="text.secondary">
                    No Image
                </Typography>

                {/* カートボタン（仮） */}
                <IconButton
                    onClick={handleAddToCart}
                    sx={{
                        position: "absolute",
                        right: 8,
                        bottom: 8,
                        backgroundColor: "background.paper",
                        boxShadow: 2,
                        "&:hover": {
                            backgroundColor: "primary.main",
                            color: "white",
                        },
                    }}
                >
                    <AddShoppingCartIcon />
                </IconButton>
            </Box>

            {/* テキストエリア */}
            <Box sx={{ p: 2 }}>
                <Typography
                    variant="caption"
                    color="primary"
                    sx={{ textTransform: "uppercase" }}
                >
                    {categories.length > 0 ? categories[0].name : "No Category"}
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 600,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                    }}
                >
                    {title}
                </Typography>

                <Typography
                    variant="h5"
                    color="primary"
                    sx={{ fontWeight: 700 }}
                >
                    ¥{price}
                </Typography>
            </Box>
        </Box>
    );
};

export default ProductCard;
