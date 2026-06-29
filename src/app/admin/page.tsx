"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LogIn,
  LogOut,
  Loader2,
  Trash2,
  RefreshCw,
  Search,
  Filter,
  Calendar,
  Users,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  ChevronDown,
  CheckCircle2,
  Clock,
  Archive,
  Send,
  FileText,
  LayoutDashboard,
  Eye,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  fetchEnquiries,
  updateEnquiryStatus,
  deleteEnquiry,
  type Enquiry,
  type EnquiryStatus,
} from "@/lib/enquiries";

const ADMIN_USER = "desi";
const ADMIN_PASS = "videshi";

const statusConfig: Record<
  EnquiryStatus,
  { label: string; color: string; bg: string; icon: React.ReactNode }
> = {
  new: {
    label: "New",
    color: "text-blue-700",
    bg: "bg-blue-50 border-blue-200",
    icon: <Clock className="h-3.5 w-3.5" />,
  },
  contacted: {
    label: "Contacted",
    color: "text-amber-700",
    bg: "bg-amber-50 border-amber-200",
    icon: <Phone className="h-3.5 w-3.5" />,
  },
  quoted: {
    label: "Quoted",
    color: "text-purple-700",
    bg: "bg-purple-50 border-purple-200",
    icon: <FileText className="h-3.5 w-3.5" />,
  },
  confirmed: {
    label: "Confirmed",
    color: "text-green-700",
    bg: "bg-green-50 border-green-200",
    icon: <CheckCircle2 className="h-3.5 w-3.5" />,
  },
  archived: {
    label: "Archived",
    color: "text-gray-500",
    bg: "bg-gray-50 border-gray-200",
    icon: <Archive className="h-3.5 w-3.5" />,
  },
};

const sourceLabels: Record<string, { label: string; color: string }> = {
  contact: { label: "Contact Page", color: "bg-teal-100 text-teal-700" },
  events: { label: "Events Page", color: "bg-orange-100 text-orange-700" },
  "menu-pdf": { label: "Menu PDF", color: "bg-indigo-100 text-indigo-700" },
};

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<EnquiryStatus | "all">("all");
  const [sourceFilter, setSourceFilter] = useState<string>("all");
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const loadEnquiries = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchEnquiries();
      setEnquiries(data);
    } catch (err) {
      console.error("Failed to load enquiries:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      loadEnquiries();
    }
  }, [isAuthenticated, loadEnquiries]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      setIsAuthenticated(true);
      setLoginError("");
    } else {
      setLoginError("Invalid credentials. Please try again.");
    }
  };

  const handleStatusChange = async (id: string, newStatus: EnquiryStatus) => {
    setUpdatingId(id);
    try {
      await updateEnquiryStatus(id, newStatus);
      setEnquiries((prev) =>
        prev.map((e) => (e.id === id ? { ...e, status: newStatus } : e))
      );
      if (selectedEnquiry?.id === id) {
        setSelectedEnquiry({ ...selectedEnquiry, status: newStatus });
      }
    } catch (err) {
      console.error("Failed to update status:", err);
      alert("Failed to update status.");
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to permanently delete this enquiry?")) return;
    setDeletingId(id);
    try {
      await deleteEnquiry(id);
      setEnquiries((prev) => prev.filter((e) => e.id !== id));
      if (selectedEnquiry?.id === id) {
        setSelectedEnquiry(null);
      }
    } catch (err) {
      console.error("Failed to delete enquiry:", err);
      alert("Failed to delete enquiry.");
    } finally {
      setDeletingId(null);
    }
  };

  const filteredEnquiries = enquiries.filter((e) => {
    const matchesSearch =
      searchQuery === "" ||
      e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.phone.includes(searchQuery) ||
      e.eventType.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || e.status === statusFilter;
    const matchesSource = sourceFilter === "all" || e.source === sourceFilter;
    return matchesSearch && matchesStatus && matchesSource;
  });

  const stats = {
    total: enquiries.length,
    new: enquiries.filter((e) => e.status === "new").length,
    contacted: enquiries.filter((e) => e.status === "contacted").length,
    confirmed: enquiries.filter((e) => e.status === "confirmed").length,
  };

  const formatDate = (timestamp: Enquiry["createdAt"]) => {
    if (!timestamp) return "—";
    const date = timestamp.toDate();
    return date.toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // ─── Login Screen ───
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#1B1B1B] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          {/* Brand */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#E8871E] to-[#A91D3A] rounded-2xl mb-4 shadow-lg">
              <LayoutDashboard className="h-8 w-8 text-white" />
            </div>
            <h1 className="font-heading text-3xl font-bold text-[#FFF8EE]">
              Admin Panel
            </h1>
            <p className="text-[#FFF8EE]/50 text-sm mt-1">
              Desi Videshi Chaat — Enquiry Management
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-[#2A2A2A] rounded-2xl border border-[#3A3A3A] p-8 shadow-2xl">
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#FFF8EE]/70 uppercase tracking-wider">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-[#1B1B1B] border border-[#3A3A3A] rounded-xl px-4 py-3 text-[#FFF8EE] text-sm focus:outline-none focus:ring-2 focus:ring-[#E8871E] placeholder:text-[#FFF8EE]/30 transition-all"
                  placeholder="Enter username"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#FFF8EE]/70 uppercase tracking-wider">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#1B1B1B] border border-[#3A3A3A] rounded-xl px-4 py-3 text-[#FFF8EE] text-sm focus:outline-none focus:ring-2 focus:ring-[#E8871E] placeholder:text-[#FFF8EE]/30 transition-all"
                  placeholder="Enter password"
                  required
                />
              </div>

              <AnimatePresence>
                {loginError && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2"
                  >
                    {loginError}
                  </motion.p>
                )}
              </AnimatePresence>

              <Button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-[#E8871E] to-[#A91D3A] hover:opacity-90 text-white py-3 font-bold transition-all shadow-lg"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </form>
          </div>

          <p className="text-center text-[#FFF8EE]/20 text-xs mt-6">
            Protected admin area. Unauthorized access is prohibited.
          </p>
        </motion.div>
      </div>
    );
  }

  // ─── Admin Dashboard ───
  return (
    <div className="min-h-screen bg-[#F5F0E8] font-sans">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 bg-[#1B1B1B] border-b border-[#3A3A3A] shadow-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-[#E8871E] to-[#A91D3A] rounded-lg flex items-center justify-center">
              <LayoutDashboard className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-[#FFF8EE] font-heading font-bold text-lg leading-tight">
                Admin Dashboard
              </h1>
              <p className="text-[#FFF8EE]/40 text-[11px]">
                Desi Videshi Chaat
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              onClick={loadEnquiries}
              variant="outline"
              disabled={loading}
              className="rounded-lg border-[#3A3A3A] bg-transparent text-[#FFF8EE]/70 hover:bg-[#2A2A2A] hover:text-[#FFF8EE] text-xs px-3 py-2"
            >
              <RefreshCw className={`h-3.5 w-3.5 mr-1.5 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
            <Button
              onClick={() => setIsAuthenticated(false)}
              variant="outline"
              className="rounded-lg border-[#3A3A3A] bg-transparent text-red-400 hover:bg-red-400/10 hover:text-red-300 text-xs px-3 py-2"
            >
              <LogOut className="h-3.5 w-3.5 mr-1.5" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {[
            {
              label: "Total Enquiries",
              value: stats.total,
              icon: <FileText className="h-5 w-5" />,
              color: "from-[#E8871E] to-[#D4721A]",
            },
            {
              label: "New Leads",
              value: stats.new,
              icon: <Clock className="h-5 w-5" />,
              color: "from-blue-500 to-blue-600",
            },
            {
              label: "Contacted",
              value: stats.contacted,
              icon: <Send className="h-5 w-5" />,
              color: "from-amber-500 to-amber-600",
            },
            {
              label: "Confirmed",
              value: stats.confirmed,
              icon: <CheckCircle2 className="h-5 w-5" />,
              color: "from-green-500 to-green-600",
            },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl border border-[#EDE6DA] p-4 shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`p-2 rounded-lg bg-gradient-to-br ${stat.color} text-white`}>
                  {stat.icon}
                </span>
              </div>
              <p className="text-2xl font-bold text-[#1B1B1B] font-heading">
                {stat.value}
              </p>
              <p className="text-xs text-[#1B1B1B]/50 mt-0.5">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Filters Bar */}
        <div className="bg-white rounded-xl border border-[#EDE6DA] p-4 mb-4 shadow-sm">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1B1B1B]/30" />
              <input
                type="text"
                placeholder="Search by name, email, phone, or event type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-[#FFF8EE]/50 border border-[#EDE6DA] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E8871E] text-[#1B1B1B]"
              />
            </div>

            {/* Status Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1B1B1B]/30" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as EnquiryStatus | "all")}
                className="pl-9 pr-8 py-2.5 bg-[#FFF8EE]/50 border border-[#EDE6DA] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E8871E] text-[#1B1B1B] appearance-none cursor-pointer"
              >
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="quoted">Quoted</option>
                <option value="confirmed">Confirmed</option>
                <option value="archived">Archived</option>
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1B1B1B]/30 pointer-events-none" />
            </div>

            {/* Source Filter */}
            <div className="relative">
              <FileText className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1B1B1B]/30" />
              <select
                value={sourceFilter}
                onChange={(e) => setSourceFilter(e.target.value)}
                className="pl-9 pr-8 py-2.5 bg-[#FFF8EE]/50 border border-[#EDE6DA] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E8871E] text-[#1B1B1B] appearance-none cursor-pointer"
              >
                <option value="all">All Sources</option>
                <option value="contact">Contact Page</option>
                <option value="events">Events Page</option>
                <option value="menu-pdf">Menu PDF</option>
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1B1B1B]/30 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Enquiries List */}
          <div className="flex-1 space-y-0">
            {loading ? (
              <div className="bg-white rounded-xl border border-[#EDE6DA] p-16 text-center shadow-sm">
                <Loader2 className="h-8 w-8 animate-spin text-[#E8871E] mx-auto mb-3" />
                <p className="text-sm text-[#1B1B1B]/50">Loading enquiries...</p>
              </div>
            ) : filteredEnquiries.length === 0 ? (
              <div className="bg-white rounded-xl border border-[#EDE6DA] p-16 text-center shadow-sm">
                <FileText className="h-12 w-12 text-[#1B1B1B]/10 mx-auto mb-3" />
                <p className="text-sm text-[#1B1B1B]/50 font-medium">No enquiries found</p>
                <p className="text-xs text-[#1B1B1B]/30 mt-1">
                  {enquiries.length === 0
                    ? "Enquiries submitted from the website will appear here."
                    : "Try adjusting your search or filters."}
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-[#EDE6DA] shadow-sm overflow-hidden">
                <div className="px-4 py-3 border-b border-[#EDE6DA] bg-[#FFF8EE]/40">
                  <p className="text-xs text-[#1B1B1B]/50 font-medium">
                    Showing {filteredEnquiries.length} of {enquiries.length} enquiries
                  </p>
                </div>
                <div className="divide-y divide-[#EDE6DA]/70">
                  {filteredEnquiries.map((enq) => (
                    <motion.div
                      key={enq.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className={`px-4 py-3.5 flex items-center gap-3 hover:bg-[#FFF8EE]/50 cursor-pointer transition-colors ${
                        selectedEnquiry?.id === enq.id ? "bg-[#E8871E]/5 border-l-3 border-l-[#E8871E]" : ""
                      }`}
                      onClick={() => setSelectedEnquiry(enq)}
                    >
                      {/* Status Badge */}
                      <span
                        className={`shrink-0 inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold border ${
                          statusConfig[enq.status]?.bg
                        } ${statusConfig[enq.status]?.color}`}
                      >
                        {statusConfig[enq.status]?.icon}
                        {statusConfig[enq.status]?.label}
                      </span>

                      {/* Name + Details */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-[#1B1B1B] truncate">
                          {enq.name}
                        </p>
                        <p className="text-[11px] text-[#1B1B1B]/40 truncate">
                          {enq.eventType} · {enq.guestCount} guests · {enq.eventDate}
                        </p>
                      </div>

                      {/* Source */}
                      <span
                        className={`shrink-0 hidden sm:inline-block text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          sourceLabels[enq.source]?.color || "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {sourceLabels[enq.source]?.label || enq.source}
                      </span>

                      {/* Time */}
                      <span className="shrink-0 text-[10px] text-[#1B1B1B]/30 hidden md:block">
                        {formatDate(enq.createdAt)}
                      </span>

                      <Eye className="h-4 w-4 shrink-0 text-[#1B1B1B]/20" />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Detail Sidebar */}
          <AnimatePresence>
            {selectedEnquiry && (
              <motion.div
                key="detail-panel"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="w-full lg:w-[420px] shrink-0"
              >
                <div className="bg-white rounded-xl border border-[#EDE6DA] shadow-sm overflow-hidden sticky top-20">
                  {/* Detail Header */}
                  <div className="px-5 py-4 border-b border-[#EDE6DA] bg-gradient-to-r from-[#E8871E]/5 to-transparent flex items-center justify-between">
                    <div>
                      <h3 className="font-heading text-lg font-bold text-[#1B1B1B]">
                        {selectedEnquiry.name}
                      </h3>
                      <p className="text-[11px] text-[#1B1B1B]/40 mt-0.5">
                        Submitted {formatDate(selectedEnquiry.createdAt)}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedEnquiry(null)}
                      className="p-1.5 rounded-lg hover:bg-[#1B1B1B]/5 transition-colors"
                    >
                      <X className="h-4 w-4 text-[#1B1B1B]/40" />
                    </button>
                  </div>

                  <div className="p-5 space-y-4">
                    {/* Contact Info */}
                    <div className="space-y-2.5">
                      <h4 className="text-[10px] font-bold text-[#1B1B1B]/40 uppercase tracking-wider">
                        Contact Info
                      </h4>
                      <div className="flex items-center gap-2.5 text-sm">
                        <Phone className="h-4 w-4 text-[#E8871E]" />
                        <a href={`tel:${selectedEnquiry.phone}`} className="text-[#1B1B1B] hover:text-[#E8871E] transition-colors">
                          {selectedEnquiry.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2.5 text-sm">
                        <Mail className="h-4 w-4 text-[#E8871E]" />
                        <a href={`mailto:${selectedEnquiry.email}`} className="text-[#1B1B1B] hover:text-[#E8871E] transition-colors">
                          {selectedEnquiry.email}
                        </a>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="space-y-2.5">
                      <h4 className="text-[10px] font-bold text-[#1B1B1B]/40 uppercase tracking-wider">
                        Event Details
                      </h4>
                      <div className="grid grid-cols-2 gap-2.5">
                        <div className="bg-[#FFF8EE]/60 rounded-lg p-2.5">
                          <p className="text-[10px] text-[#1B1B1B]/40 font-medium">Type</p>
                          <p className="text-sm font-semibold text-[#1B1B1B]">{selectedEnquiry.eventType || "—"}</p>
                        </div>
                        <div className="bg-[#FFF8EE]/60 rounded-lg p-2.5">
                          <p className="text-[10px] text-[#1B1B1B]/40 font-medium">Date</p>
                          <p className="text-sm font-semibold text-[#1B1B1B]">{selectedEnquiry.eventDate || "—"}</p>
                        </div>
                        <div className="bg-[#FFF8EE]/60 rounded-lg p-2.5">
                          <p className="text-[10px] text-[#1B1B1B]/40 font-medium">Guests</p>
                          <p className="text-sm font-semibold text-[#1B1B1B]">{selectedEnquiry.guestCount || "—"}</p>
                        </div>
                        <div className="bg-[#FFF8EE]/60 rounded-lg p-2.5">
                          <p className="text-[10px] text-[#1B1B1B]/40 font-medium">Location</p>
                          <p className="text-sm font-semibold text-[#1B1B1B] truncate">{selectedEnquiry.location || "—"}</p>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    {selectedEnquiry.message && (
                      <div className="space-y-1.5">
                        <h4 className="text-[10px] font-bold text-[#1B1B1B]/40 uppercase tracking-wider">
                          Message
                        </h4>
                        <div className="bg-[#FFF8EE]/60 rounded-lg p-3">
                          <p className="text-sm text-[#1B1B1B]/80 leading-relaxed whitespace-pre-wrap">
                            {selectedEnquiry.message}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Source Badge */}
                    <div className="space-y-1.5">
                      <h4 className="text-[10px] font-bold text-[#1B1B1B]/40 uppercase tracking-wider">
                        Source
                      </h4>
                      <span
                        className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${
                          sourceLabels[selectedEnquiry.source]?.color || "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {sourceLabels[selectedEnquiry.source]?.label || selectedEnquiry.source}
                      </span>
                    </div>

                    {/* Status Update */}
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-bold text-[#1B1B1B]/40 uppercase tracking-wider">
                        Update Status
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {(Object.keys(statusConfig) as EnquiryStatus[]).map((s) => (
                          <button
                            key={s}
                            onClick={() => handleStatusChange(selectedEnquiry.id!, s)}
                            disabled={updatingId === selectedEnquiry.id || selectedEnquiry.status === s}
                            className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-semibold border transition-all ${
                              selectedEnquiry.status === s
                                ? `${statusConfig[s].bg} ${statusConfig[s].color} ring-2 ring-offset-1 ring-current`
                                : "bg-white border-[#EDE6DA] text-[#1B1B1B]/60 hover:border-[#E8871E]/40 hover:text-[#1B1B1B]"
                            } disabled:opacity-50`}
                          >
                            {updatingId === selectedEnquiry.id ? (
                              <Loader2 className="h-3 w-3 animate-spin" />
                            ) : (
                              statusConfig[s].icon
                            )}
                            {statusConfig[s].label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-3 border-t border-[#EDE6DA] flex gap-2">
                      <a
                        href={`https://wa.me/91${selectedEnquiry.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
                          `Hi ${selectedEnquiry.name}, this is Desi Videshi Chaat. We received your catering enquiry for ${selectedEnquiry.eventType} on ${selectedEnquiry.eventDate}. Let's discuss your requirements!`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button className="w-full rounded-lg bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs py-2.5 font-semibold">
                          <MessageSquare className="h-3.5 w-3.5 mr-1.5" />
                          WhatsApp
                        </Button>
                      </a>
                      <a href={`tel:${selectedEnquiry.phone}`} className="flex-1">
                        <Button
                          variant="outline"
                          className="w-full rounded-lg border-[#EDE6DA] bg-transparent text-[#1B1B1B] hover:bg-[#FFF8EE] text-xs py-2.5 font-semibold"
                        >
                          <Phone className="h-3.5 w-3.5 mr-1.5" />
                          Call
                        </Button>
                      </a>
                      <Button
                        variant="outline"
                        onClick={() => handleDelete(selectedEnquiry.id!)}
                        disabled={deletingId === selectedEnquiry.id}
                        className="rounded-lg border-red-200 bg-transparent text-red-500 hover:bg-red-50 hover:text-red-600 text-xs py-2.5 px-3"
                      >
                        {deletingId === selectedEnquiry.id ? (
                          <Loader2 className="h-3.5 w-3.5 animate-spin" />
                        ) : (
                          <Trash2 className="h-3.5 w-3.5" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
