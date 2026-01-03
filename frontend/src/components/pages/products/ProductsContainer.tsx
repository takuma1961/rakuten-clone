import * as React from "react";
import {
    Box,
    Container,
    Typography,
    Paper,
    Pagination,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

import ProductCard from "./ProductCard";

import { getProducts } from "../../../api/ProductRequest";

import { Category } from "../../types/Category";

// 仮のProduct型
type Product = {
    objectID: number;
    name: string;
    price: number;
    description: string;
    categories: Category[];
};

const ProductContainer: React.FC = () => {
    const navigate = useNavigate();

    //商品一覧
    const [products, setProducts] = React.useState<Product[]>([]);

    //ページ
    const [page, setPage] = React.useState(0);
    const [totalpages, setTotalPages] = React.useState(1);

    React.useEffect(() => {

        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/");
            return;
        }

        const fetchProducts = async () => {
            try {
                const res = await getProducts(token, page, 8);

                //未ログイン
                if (res instanceof Response) {
                    if (res.status === 401) {
                        navigate("/")
                        return;
                    }
                    console.error("商品取得失敗", res.status);
                }

                // 👉 仮対応（API仕様に合わせて調整）
                setProducts(res.data ?? []);
                setTotalPages(res.totalPages ?? 1);

            } catch (error) {
                console.error("商品取得エラー", error);
            }
        };

        fetchProducts();
    }, [page, navigate]);

    return (
        <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Container maxWidth="xl" sx={{ flex: 1, py: 4 }}>
                <Typography
                    variant="h4"
                    sx={{ mb: 3, fontWeight: 600, textAlign: "center" }}
                >
                    商品一覧
                </Typography>

                <Paper sx={{ p: 3, borderRadius: 2 }}>
                    {products.length > 0 ? (
                        <Grid container spacing={3} justifyContent="center">
                            {products.map((product) => (
                                <Grid
                                    key={product.objectID}
                                    size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                                    display="flex"
                                    justifyContent="center"
                                >
                                    <ProductCard
                                        id={product.objectID}
                                        title={product.name}
                                        price={product.price}
                                        categories={product.categories}
                                        description={product.description}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    ) : (
                        <Box sx={{ py: 6, textAlign: "center" }}>
                            <Typography color="text.secondary">
                                商品がありません
                            </Typography>
                        </Box>
                    )}
                </Paper>

                {/* ページネーション */}
                <Box display="flex" justifyContent="center" mt={3}>
                    <Pagination
                        count={totalpages}
                        page={page + 1}
                        onChange={(_, value) => setPage(value - 1)}
                    />
                </Box>
            </Container>
        </Box>
    );
};

export default ProductContainer;