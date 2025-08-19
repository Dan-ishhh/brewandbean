import { useState } from "react";
import { useCart } from "@/contexts/cart-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 32,
    fontSize: 12,
    fontFamily: "Helvetica",
    backgroundColor: "#FFF8F0",
    color: "#4B2E2B",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    borderBottomWidth: 2,
    borderBottomColor: "#F5F5DC",
    paddingBottom: 8,
  },
  logo: { width: 30, height: 32, marginRight: 16 },
  title: { fontSize: 22, fontWeight: "bold", color: "#6F4E37" },
  section: { marginBottom: 14 },
  item: { marginBottom: 6 },
  itemName: { fontWeight: "bold", color: "#4B2E2B" },
  itemOptions: { fontSize: 10, color: "#6F4E37" },
  total: { fontSize: 16, marginTop: 12, fontWeight: "bold", color: "#6F4E37" },
  status: { fontSize: 12, marginTop: 8, color: "#4B2E2B" },
});

function InvoicePDF({
  items,
  total,
  paid,
}: {
  items: any[];
  total: number;
  paid: boolean;
}) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image src="/coffee-cup.png" style={styles.logo} />
          <Text style={styles.title}>Brew & Bean Invoice</Text>
        </View>
        <View style={styles.section}>
          <Text
            style={{ fontWeight: "bold", color: "#6F4E37", marginBottom: 6 }}
          >
            Order Items:
          </Text>
          {items.map((item, idx) => (
            <View key={idx} style={styles.item}>
              <Text style={styles.itemName}>
                {item.name} x{item.quantity} - ${item.price.toFixed(2)} each
              </Text>
              {item.options && (
                <Text style={styles.itemOptions}>
                  {Object.entries(item.options)
                    .filter(([k, v]) => v && k !== "customizationKey")
                    .map(
                      ([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`
                    )
                    .join(" | ")}
                </Text>
              )}
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
          <Text style={styles.status}>Status: {paid ? "Paid" : "Unpaid"}</Text>
        </View>
        <View style={styles.section}>
          <Text style={{ fontSize: 10, color: "#6F4E37" }}>
            Thank you for choosing Brew & Bean!
          </Text>
        </View>
      </Page>
    </Document>
  );
}

export default function CheckoutPage() {
  const [cardForm, setCardForm] = useState({
    name: "",
    number: "",
    expiry: "",
    cvv: "",
  });
  const [cardError, setCardError] = useState("");
  const { state, dispatch } = useCart();
  const [payment, setPayment] = useState<"restaurant" | "online" | null>(null);
  const [paid, setPaid] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [autoDownload, setAutoDownload] = useState(false);
  const [invoiceData, setInvoiceData] = useState<{
    items: any[];
    total: number;
  } | null>(null);

  const handleCardInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleCardPay = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !cardForm.name ||
      !cardForm.number ||
      !cardForm.expiry ||
      !cardForm.cvv
    ) {
      setCardError("Please fill in all fields.");
      return;
    }
    setCardError("");
    handlePayOnline();
  };

  const handlePayOnline = () => {
    setPaid(true);
    setShowSuccess(true);
    setInvoiceData({ items: state.items, total: state.total });
    dispatch({ type: "CLEAR_CART" });
    setAutoDownload(true);
  };

  const handlePayAtRestaurant = () => {
    setPaid(false);
    setShowSuccess(true);
    setInvoiceData({ items: state.items, total: state.total });
    dispatch({ type: "CLEAR_CART" });
    setAutoDownload(true);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF8F0] dark:bg-[#18181c]">
        <Card className="max-w-md w-full shadow-xl border-0 rounded-2xl bg-[#FFF8F0] dark:bg-[#222]">
          <CardContent className="p-8 text-center">
            <CheckCircle className="mx-auto mb-4 h-12 w-12 text-green-600 animate-bounce" />
            <h2 className="text-2xl font-bold mb-2 text-[#4B2E2B] dark:text-[#e6e6e6]">
              {paid ? "Payment Successful!" : "Order Confirmed!"}
            </h2>
            <p className="mb-6 text-[#6F4E37] dark:text-[#e6b800]">
              {paid
                ? "Thank you for your payment. Your order is confirmed."
                : "Your order is confirmed. Please pay at the restaurant."}
            </p>
            <PDFDownloadLink
              document={
                <InvoicePDF
                  items={invoiceData?.items ?? []}
                  total={invoiceData?.total ?? 0}
                  paid={paid}
                />
              }
              fileName="invoice.pdf"
              style={{ display: "none" }}
            >
              {({ url }) => {
                if (autoDownload && url && typeof window !== "undefined") {
                  setTimeout(() => {
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = "invoice.pdf";
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                  }, 500);
                }
                return null;
              }}
            </PDFDownloadLink>
            <Link href="/menu" className="block mt-6">
              <Button className="w-full py-3 rounded-full shadow-md bg-transparent border-0 hover:bg-[#F5F5DC] hover:text-[#4B2E2B] dark:hover:bg-[#222] dark:hover:text-[#e6b800] text-[#4B2E2B] dark:text-[#e6e6e6] bg-[#FFF8F0] dark:bg-[#18181c]">
                Back to Menu
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div
      data-scroll-container
      className="min-h-screen flex flex-col items-center justify-center bg-[#FFF8F0] dark:bg-[#18181c]"
      style={{ width: "100%" }}
    >
      <section className="pt-24 pb-12 w-full">
        <div
          className="px-4 max-w-3xl mx-auto w-full checkout-fullwidth"
          style={{ width: "100%" }}
        >
          <style>{`@media (max-width: 700px) {.checkout-fullwidth {max-width: 100vw !important;width: 100vw !important;margin-left: 0 !important;margin-right: 0 !important;padding-left: 16px !important;padding-right: 16px !important;}}`}</style>
          <div className="flex items-center justify-between gap-3 mb-8 mt-4">
            <Link href="/menu">
              <Button
                size="sm"
                className="text-white px-4 py-4 rounded-full shadow-lg hover:shadow-xl transition-all group w-full sm:w-auto border-0 bg-[#6F4E37] dark:bg-[#222] dark:text-[#e6b800] dark:hover:bg-[#333]"
              >
                <ArrowLeft className="h-5 w-5" /> Back to Menu
              </Button>
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-center mb-8 text-[#4B2E2B] dark:text-[#e6e6e6]">
            Checkout
          </h1>

          <Card className="shadow-xl border-0 rounded-2xl mb-8 bg-[#FFF8F0] dark:bg-[#222]">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 text-[#4B2E2B] dark:text-[#e6e6e6]">
                Your Items
              </h2>
              {state.items.length === 0 ? (
                <p className="text-center text-lg text-[#6F4E37] dark:text-[#e6b800]">
                  Your cart is empty.
                </p>
              ) : (
                <div className="space-y-4">
                  {state.items.map((item, idx) => (
                    <Card
                      key={`${item.id}-${idx}`}
                      className="border rounded-xl shadow-sm bg-[#FFF8F0] dark:bg-[#18181c] border-[#F5F5DC] dark:border-[#333]"
                    >
                      <CardContent className="p-4 flex gap-4 items-center">
                        <img
                          src={
                            item.image ||
                            "/placeholder.svg?height=64&width=64&query=food item"
                          }
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/placeholder.svg?height=64&width=64";
                          }}
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1 text-[#4B2E2B] dark:text-[#e6e6e6]">
                            {item.name}
                          </h3>
                          <p className="text-sm mb-1 text-[#6F4E37] dark:text-[#e6b800]">
                            ${item.price.toFixed(2)} each x{item.quantity}
                          </p>
                          {item.options && (
                            <div className="mb-1 text-xs text-[#6F4E37] dark:text-[#e6b800] space-y-1">
                              {Object.entries(item.options)
                                .filter(
                                  ([k, v]) => v && k !== "customizationKey"
                                )
                                .map(([k, v]) => (
                                  <div key={k}>
                                    {k}: {Array.isArray(v) ? v.join(", ") : v}
                                  </div>
                                ))}
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
              <div className="flex justify-between items-center mt-6 text-lg font-bold">
                <span className="text-[#4B2E2B] dark:text-[#e6e6e6]">
                  Total:
                </span>
                <span className="text-[#6F4E37] dark:text-[#e6b800]">
                  ${state.total.toFixed(2)}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0 rounded-2xl bg-[#FFF8F0] dark:bg-[#222]">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 text-[#4B2E2B] dark:text-[#e6e6e6]">
                Payment Options
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <label
                  className={`flex items-center gap-3 px-4 py-3 rounded-full cursor-pointer border transition-all duration-200 ${
                    payment === "restaurant"
                      ? "border-[#6F4E37] bg-[#FAF3E0] dark:bg-[#222] dark:border-[#e6b800]"
                      : "border-[#F5F5DC] bg-[#FFF8F0] dark:bg-[#18181c] dark:border-[#333]"
                  } ${
                    payment === "restaurant"
                      ? "text-[#4B2E2B] dark:text-[#e6b800]"
                      : "text-[#6F4E37] dark:text-[#e6e6e6]"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="restaurant"
                    checked={payment === "restaurant"}
                    onChange={() => setPayment("restaurant")}
                    className="accent-[#6F4E37] h-5 w-5 focus:outline-none focus:ring-0"
                  />
                  <span className="font-medium">Pay at Restaurant</span>
                </label>
                <label
                  className={`flex items-center gap-3 px-4 py-3 rounded-full cursor-pointer border transition-all duration-200 ${
                    payment === "online"
                      ? "border-[#6F4E37] bg-[#FAF3E0] dark:bg-[#222] dark:border-[#e6b800]"
                      : "border-[#F5F5DC] bg-[#FFF8F0] dark:bg-[#18181c] dark:border-[#333]"
                  } ${
                    payment === "online"
                      ? "text-[#4B2E2B] dark:text-[#e6b800]"
                      : "text-[#6F4E37] dark:text-[#e6e6e6]"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="online"
                    checked={payment === "online"}
                    onChange={() => setPayment("online")}
                    className="accent-[#6F4E37] h-5 w-5 focus:outline-none focus:ring-0"
                  />
                  <span className="font-medium">Pay Online</span>
                </label>
              </div>
              {payment && (
                <div className="mt-6">
                  {payment === "online" ? (
                    <form
                      className="space-y-4"
                      onSubmit={handleCardPay}
                      autoComplete="off"
                    >
                      <div className="flex flex-col gap-2">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name on Card"
                          value={cardForm.name}
                          onChange={handleCardInput}
                          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6F4E37] bg-[#FFF8F0] dark:bg-[#18181c] text-[#4B2E2B] dark:text-[#e6e6e6]"
                          required
                        />
                        <input
                          type="text"
                          name="number"
                          placeholder="Card Number"
                          value={cardForm.number}
                          onChange={handleCardInput}
                          maxLength={19}
                          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6F4E37] bg-[#FFF8F0] dark:bg-[#18181c] text-[#4B2E2B] dark:text-[#e6e6e6]"
                          required
                        />
                        <div className="flex gap-2">
                          <input
                            type="text"
                            name="expiry"
                            placeholder="MM/YY"
                            value={cardForm.expiry}
                            onChange={handleCardInput}
                            maxLength={5}
                            className="border rounded-lg px-4 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-[#6F4E37] bg-[#FFF8F0] dark:bg-[#18181c] text-[#4B2E2B] dark:text-[#e6e6e6]"
                            required
                          />
                          <input
                            type="password"
                            name="cvv"
                            placeholder="CVV"
                            value={cardForm.cvv}
                            onChange={handleCardInput}
                            maxLength={4}
                            className="border rounded-lg px-4 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-[#6F4E37] bg-[#FFF8F0] dark:bg-[#18181c] text-[#4B2E2B] dark:text-[#e6e6e6]"
                            required
                          />
                        </div>
                      </div>
                      {cardError && (
                        <p className="text-red-500 text-sm">{cardError}</p>
                      )}
                      <Button
                        type="submit"
                        className="w-full py-3 rounded-full shadow-lg border-0 text-white bg-[#6F4E37] dark:bg-[#222] dark:text-[#e6b800] dark:hover:bg-[#333]"
                      >
                        Pay
                      </Button>
                    </form>
                  ) : (
                    <Button
                      className="w-full py-3 rounded-full shadow-lg border-0 text-white bg-[#6F4E37] dark:bg-[#222] dark:text-[#e6b800] dark:hover:bg-[#333]"
                      onClick={handlePayAtRestaurant}
                    >
                      Confirm Order
                    </Button>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
