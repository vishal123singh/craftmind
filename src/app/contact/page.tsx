// app/contact/page.tsx
"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactPage() {
  const { theme } = useTheme();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Message sent!", {
      description: "We'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <>
      <main
        className={`min-h-screen overflow-x-hidden ${
          theme === "dark"
            ? "bg-gradient-to-b from-gray-900 to-indigo-900 text-white"
            : "bg-gradient-to-b from-gray-50 to-indigo-50 text-gray-900"
        }`}
      >
        {/* Futuristic Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-grid-white/[0.03]"></div>
          <div
            className={`absolute top-0 left-1/4 w-96 h-96 rounded-full filter blur-3xl ${
              theme === "dark" ? "bg-indigo-600/10" : "bg-indigo-300/20"
            }`}
          ></div>
          <div
            className={`absolute bottom-0 right-1/4 w-64 h-64 rounded-full filter blur-3xl ${
              theme === "dark" ? "bg-pink-600/10" : "bg-pink-300/20"
            }`}
          ></div>
        </div>

        <div className="container py-16 md:py-24 relative z-10">
          <div className="mx-auto max-w-4xl">
            {/* Animated Header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.h1
                className={`text-4xl font-bold tracking-tight sm:text-5xl mb-4 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-white to-indigo-400"
                    : "bg-gradient-to-r from-gray-900 to-indigo-600"
                } bg-clip-text text-transparent`}
              >
                Get in touch
              </motion.h1>
              <motion.p
                className={`text-lg ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                } max-w-2xl mx-auto`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Have a project in mind or want to discuss potential
                opportunities? Reach out—we'd love to hear from you.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium mb-2 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className={`${
                        theme === "dark"
                          ? "bg-white/5 border-white/10 focus:border-indigo-400"
                          : "bg-white border-gray-200 focus:border-indigo-300"
                      }`}
                      {...form.register("name")}
                    />
                    {form.formState.errors.name && (
                      <p className="mt-1 text-sm text-red-500">
                        {form.formState.errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium mb-2 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className={`${
                        theme === "dark"
                          ? "bg-white/5 border-white/10 focus:border-indigo-400"
                          : "bg-white border-gray-200 focus:border-indigo-300"
                      }`}
                      {...form.register("email")}
                    />
                    {form.formState.errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium mb-2 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={5}
                      className={`${
                        theme === "dark"
                          ? "bg-white/5 border-white/10 focus:border-indigo-400"
                          : "bg-white border-gray-200 focus:border-indigo-300"
                      }`}
                      {...form.register("message")}
                    />
                    {form.formState.errors.message && (
                      <p className="mt-1 text-sm text-red-500">
                        {form.formState.errors.message.message}
                      </p>
                    )}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className={`w-full ${
                        theme === "dark"
                          ? "bg-indigo-600 hover:bg-indigo-700"
                          : "bg-indigo-600 hover:bg-indigo-700"
                      }`}
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">
                    Contact Information
                  </h2>
                  <p
                    className={`${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Feel free to reach out through any of these channels
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: <Mail className="h-5 w-5" />,
                      title: "Email",
                      content: "hello@craftmind.dev",
                    },
                    {
                      icon: <Phone className="h-5 w-5" />,
                      title: "Phone",
                      content: "+1 (555) 123-4567",
                    },
                    {
                      icon: <MapPin className="h-5 w-5" />,
                      title: "Office",
                      content: "123 Tech Street\nSan Francisco, CA 94107",
                    },
                    {
                      icon: <Clock className="h-5 w-5" />,
                      title: "Hours",
                      content: "Monday - Friday\n9:00 AM - 5:00 PM PST",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className={`flex items-start gap-4 p-4 rounded-xl ${
                        theme === "dark"
                          ? "bg-white/5 border border-white/10 hover:border-indigo-400/30"
                          : "bg-white border border-gray-200 hover:border-indigo-300"
                      } transition-all`}
                      whileHover={{ y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div
                        className={`p-2 rounded-lg ${
                          theme === "dark"
                            ? "bg-indigo-500/10"
                            : "bg-indigo-100"
                        } text-indigo-400`}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <p
                          className={`whitespace-pre-line ${
                            theme === "dark" ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {item.content}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
